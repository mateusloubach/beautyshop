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
  const [isMounted, setIsMounted] = useState(false);
  const [pathname, setPathname] = useState<string>("/");
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const actualPathname = usePathname();

  // Prevent hydration mismatch by only using pathname after mount
  useEffect(() => {
    // Schedule updates asynchronously to avoid triggering cascading renders
    const rafId =
      typeof window !== "undefined"
        ? requestAnimationFrame(() => {
            setIsMounted(true);
            setPathname(actualPathname);
          })
        : undefined;

    return () => {
      if (typeof window !== "undefined" && rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [actualPathname]);

  const isHome = pathname === "/";

  // On home: transparent header until scroll.
  // On other routes: always use the "scrolled" (solid) style by default.
  // For non-home pages, always show solid header to prevent hydration mismatch
  // During SSR and initial render, default to solid header to prevent mismatch
  const showSolidHeader = !isMounted || !isHome || isScrolled;
  const useLightHeaderText = isMounted && isHome && !isScrolled;

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
  // Only check scroll after component mounts to prevent hydration mismatch
  useEffect(() => {
    // Use requestAnimationFrame to ensure this runs after initial render
    const checkScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };
    
    // Delay initial check to avoid hydration mismatch
    const timeoutId = setTimeout(checkScroll, 0);
    
    const onScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    // { label: "INÍCIO", href: "/" },
    { label: "SERVIÇOS", href: "/services" },
    { label: "SOBRE NÓS", href: "/about-us" },
    { label: "GALERIA", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50" suppressHydrationWarning>
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
              "text-3xl font-bold uppercase tracking-tight transition-colors duration-300 font-syne",
              useLightHeaderText ? "text-white" : "text-[#4a3b39]"
            )}
          >
            <span className="md:hidden">Carol Beauty</span>
            <span className="hidden md:inline">Carol Belmonte Beauty</span>
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
                        "text-lg! font-medium tracking-wide transition-colors px-4 py-2 rounded-md font-syne",
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
              "hidden md:inline-flex bg-foreground backdrop-blur-md shadow-md transition-colors duration-300 font-syne",
              useLightHeaderText
                ? "text-white"
                : "text-white"
            )}
            size="lg"
          >
            <a
              href="https://wa.me/351930472713"
              target="_blank"
              rel="noopener noreferrer"
              className="font-syne"
            >
              Faça sua reserva agora
            </a>
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
            "md:hidden absolute top-full left-4 right-4 mt-2 py-4 backdrop-blur-lg bg-background/95 border border-border/50 rounded-xl transition-all duration-300 ease-in-out shadow-2xl z-50",
            isMenuOpen
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
          )}
        >
          <div className="flex flex-col gap-2 px-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-base font-medium tracking-wide transition-all duration-200 px-4 py-3 rounded-lg font-syne text-center",
                  useLightHeaderText
                    ? "text-black/95 bg-accent hover:text-foregroundText hover:bg-white/10 active:bg-white/20"
                    : "text-foregroundText hover:bg-accent/50 active:bg-accent"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
