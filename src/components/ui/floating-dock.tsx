import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import Link from "next/link";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  onItemClick,
  logo,
  onLogoClick,
}: {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  logo?: React.ReactNode;
  onLogoClick?: () => void;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} onItemClick={onItemClick} logo={logo} onLogoClick={onLogoClick} />
      <FloatingDockMobile items={items} className={mobileClassName} onItemClick={onItemClick} logo={logo} onLogoClick={onLogoClick} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  onItemClick,
  logo,
  onLogoClick,
}: {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  logo?: React.ReactNode;
  onLogoClick?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden flex items-center gap-3 px-4 py-3 rounded-2xl", className)}>
      {logo && (
        <div className="flex items-center h-10">
          {logo}
        </div>
      )}
      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                <Link
                  href={item.href}
                  key={item.title}
                  onClick={(e) => onItemClick?.(e, item.href)}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm border transition-colors",
                    item.active 
                      ? "bg-primary/20 border-primary/50 hover:bg-primary/30" 
                      : "bg-black/40 border-white/10 hover:bg-white/20"
                  )}
                >
                  <div className={cn("h-4 w-4", item.active ? "text-primary" : "text-white")}>
                    {item.icon}
                  </div>
                </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  onItemClick,
  logo,
  onLogoClick,
}: {
  items: { title: string; icon: React.ReactNode; href: string; active?: boolean }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  logo?: React.ReactNode;
  onLogoClick?: () => void;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-center gap-4 rounded-2xl px-4 md:flex",
        className,
      )}
    >
      {logo && (
        <div className="flex items-center h-10">
          {logo}
        </div>
      )}
      <div className="flex items-end gap-4 pb-3">
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} onItemClick={onItemClick} active={item.active} />
      ))}
      </div>
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onItemClick,
  active,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  active?: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} onClick={(e) => onItemClick?.(e, href)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full backdrop-blur-sm border transition-colors",
          active
            ? "bg-primary/20 border-primary/50 hover:bg-primary/30"
            : "bg-white/5 border-white/10 hover:bg-white/10"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-white/20 bg-black/80 backdrop-blur-sm px-2 py-0.5 text-xs whitespace-pre text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn("flex items-center justify-center", active ? "text-primary" : "text-white")}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
