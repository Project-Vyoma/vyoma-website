"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  Info,
  FolderKanban,
  Image as ImageIcon,
  Trophy,
  Handshake,
  Users,
  Mail
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow default navigation for routes
    if (href.startsWith("/")) {
      return; // Let Next.js handle the navigation
    }

    // Handle anchor links on home page
    e.preventDefault();
    if (pathname === "/") {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Navigate to home page first, then scroll
      window.location.href = `/${href}`;
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    // Otherwise let Link handle navigation
  };

  const navItems = [
    {
      title: "Home",
      icon: <Home className="h-full w-full" />,
      href: "/",
      active: isActive("/"),
    },
    {
      title: "About",
      icon: <Info className="h-full w-full" />,
      href: "/about",
      active: isActive("/about"),
    },
    {
      title: "Projects",
      icon: <FolderKanban className="h-full w-full" />,
      href: "/projects",
      active: isActive("/projects"),
    },
    {
      title: "Gallery",
      icon: <ImageIcon className="h-full w-full" />,
      href: "/gallery",
      active: isActive("/gallery"),
    },
    {
      title: "Achievements",
      icon: <Trophy className="h-full w-full" />,
      href: "/achievements",
      active: isActive("/achievements"),
    },
    {
      title: "Sponsors",
      icon: <Handshake className="h-full w-full" />,
      href: "/sponsors",
      active: isActive("/sponsors"),
    },
    {
      title: "Team",
      icon: <Users className="h-full w-full" />,
      href: "/team",
      active: isActive("/team"),
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full" />,
      href: "/contact",
      active: isActive("/contact"),
    },
  ];

  const logo = (
    <Link href="/" onClick={handleLogoClick}>
      <Image
        src="/images/image.png"
        alt="VYOMA Logo"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );

  return (
    <header className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          items={navItems}
          desktopClassName="bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
          mobileClassName="bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
          onItemClick={handleNavClick}
          logo={logo}
        />
      </div>
    </header>
  );
}
