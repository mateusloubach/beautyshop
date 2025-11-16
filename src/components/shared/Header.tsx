"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On home: transparent header until scroll.
  // On other routes: always use the "scrolled" (solid) style by default.
  const showSolidHeader = !isHome || isScrolled;
  const useLightHeaderText = isHome && !isScrolled;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Detect scroll position to toggle header blur/background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    // { label: "INÍCIO", href: "/" },
    { label: "SERVIÇOS", href: "/services" },
    { label: "SOBRE NÓS", href: "/about" },
    { label: "GALERIA", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Full-width effect layer spanning edge-to-edge */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-all duration-300 z-0",
          showSolidHeader
            ? "backdrop-blur-lg bg-background/35 shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        )}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={cn(
              "text-3xl font-bold tracking-tight transition-colors duration-300",
              useLightHeaderText ? "text-white" : "text-[#4a3b39]"
            )}
          >
            CAROLBEAUTY
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium tracking-wide transition-colors px-4 py-2 rounded-md",
                        useLightHeaderText
                          ? "text-white hover:text-foregroundText"
                          : "text-[#4a3b39] hover:text-foregroundText"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            className={cn(
              "hidden md:inline-flex bg-background/15 hover:bg-background/75 backdrop-blur-md shadow-md transition-colors duration-300",
              useLightHeaderText
                ? "text-white hover:text-foregroundText/80"
                : "text-[#4a3b39] hover:text-foregroundText"
            )}
            size="lg"
          >
            <Link href={isHome ? "#contact" : "/"}>
              {/* {isHome ? "Faça sua reserva agora" : "Voltar ao início"} */}
              Faça sua reserva agora
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className={cn(
              "md:hidden focus:outline-none transition-colors duration-300",
              useLightHeaderText ? "text-white" : "text-foregroundText"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          ref={menuRef}
          className={cn(
            "md:hidden absolute top-full right-0 mt-2 py-7 backdrop-blur-md p-4 border border-white/5 rounded-2xl transition-all duration-300 ease-in-out max-w-sm w-3/4 mx-1 shadow-2xl",
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors p-5 rounded-xl",
                    useLightHeaderText
                      ? "text-white/95 hover:text-foregroundText bg-background/5"
                      : "text-foregroundText/90 hover:text-foregroundText bg-background"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* <Button className="mt-4" size="lg">
                Book an Appointment
              </Button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
