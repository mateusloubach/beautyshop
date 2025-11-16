"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { bottombarLinks } from "@/constants/navigation";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-around px-4 py-2">
        {bottombarLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? "brightness-0 invert" : ""}`}
              />
              <p className="text-xs font-medium">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;

