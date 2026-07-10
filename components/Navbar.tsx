"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrolled } from "@/hooks/useScrolled";

const NAV_LINKS = [
  { label: "AI Receptionist", href: "/#hero" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(64);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-outline-variant"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link href="/" className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-primary">
        Augova
      </Link>

      <div className="hidden md:flex items-center gap-gutter font-body-md text-body-md">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:inline-block bg-primary text-background px-6 py-2 font-bold text-body-md hover:opacity-80 transition-opacity"
        >
          Book Demo
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-primary"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>

        <Link
          href="/contact"
          className="md:hidden bg-primary text-background px-4 py-2 font-bold text-body-md hover:opacity-80 transition-opacity"
        >
          Book Demo
        </Link>
      </div>

      <div
        data-testid="mobile-menu"
        className={`${mobileOpen ? "flex" : "hidden"} md:hidden absolute top-16 left-0 w-full flex-col gap-grid-unit bg-background border-b border-outline-variant px-margin-mobile py-grid-unit`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 py-2"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
