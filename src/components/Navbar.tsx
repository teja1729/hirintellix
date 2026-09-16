"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#product", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
];

function scrollToHash(href: string) {
  const hash = href.includes("#") ? href.slice(href.indexOf("#")) : "";
  if (!hash) return false;
  const target = document.querySelector(hash);
  if (!target) return false;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", hash);
  return true;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[#F9F9FA]/80 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "border-black/10 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)]" : "border-black/10"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => {
                if (pathname === "/" && scrollToHash(link.href)) {
                  event.preventDefault();
                }
              }}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/signin"
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-black/5"
            >
              Sign in
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/signup"
              className="rounded-full bg-neutral-950 px-5 py-2 text-sm font-medium text-white shadow-sm"
            >
              Sign up
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t border-black/10">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  if (pathname === "/" && scrollToHash(link.href)) {
                    event.preventDefault();
                  }
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                href="/signin"
                className="flex-1 rounded-full border border-black/10 px-4 py-2.5 text-center text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="flex-1 rounded-full bg-neutral-950 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
