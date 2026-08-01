"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Insanely White"
            width={180}
            height={70}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="#appointment"
          className="hidden rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400 md:inline-flex"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0b] md:hidden">
          <nav className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-white transition hover:text-yellow-500"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full bg-yellow-500 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              Book Appointment
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}