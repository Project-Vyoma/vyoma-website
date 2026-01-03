"use client";

import { usePathname, useRouter } from "next/navigation";
import { aircraftConfig } from "@/app/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    
    // Handle Gallery - navigate to gallery page
    if (name === "Gallery") {
      router.push('/gallery');
      return;
    }
    
    // Handle Contact - navigate to contact page
    if (name === "Contact") {
      router.push('/contact');
      return;
    }
    
    // Handle hash links (Overview, Specifications, Aerodynamics)
    if (href.startsWith('#')) {
      // If we're on the home page, scroll to the section
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // If section doesn't exist, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home and then scroll
        router.push(`/${href}`);
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-black border-t border-border/50 py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-6 flex-wrap gap-4">
          {aircraftConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.name)}
              className="text-sm hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-xs">&copy; {currentYear} {aircraftConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
