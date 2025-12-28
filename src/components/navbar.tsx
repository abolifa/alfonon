"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#process", label: "مراحل الإنتاج" },
    { href: "#products", label: "المنتجات" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-none border-white/5",
        scrolled
          ? "backdrop-blur-xl bg-black/70"
          : "bg-linear-to-b from-black/70 via-black/30 to-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero">
          <img
            src={scrolled ? "/meta/logo.png" : "/meta/logo-white.png"}
            alt="logo"
            width={90}
            height={90}
            className="object-contain w-32 h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-200 hover:text-white transition relative group"
            >
              {l.label}
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-linear-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/218912135345"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full p-2 flex items-center justify-center transition-colors duration-300 hover:bg-green-500"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
          </a>

          <a
            href="mailto:info@alfunon.com.ly"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full p-2 flex items-center justify-center transition-colors duration-300 hover:bg-gray-500"
          >
            <Mail className="w-4 h-4 text-white" />
          </a>

          <button
            className="md:hidden border rounded-full p-2 flex items-center justify-center"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-999 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white text-xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full border"
          >
            <X className="w-6 h-6" />
          </button>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-sky-400 transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
