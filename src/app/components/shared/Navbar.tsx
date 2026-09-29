"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import NMContainer from "../ui/Container";
import Button from "../ui/Button";
import CartSidebar from "./CartSidebar";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Track scroll position to enhance navbar with subtle backdrop blur when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-secondary bg-[url('/common-bg.png')] bg-top bg-cover bg-no-repeat",
        isScrolled
          ? "shadow-lg shadow-black/20 border-b border-white/10 py-3 backdrop-blur-md"
          : "py-4 md:py-5 border-b border-[#1f53e6]/50"
      )}
    >
      <NMContainer>
        <div className="flex items-center justify-between">
        
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="relative h-8 w-36 sm:h-9 sm:w-40">
              <Image
                src="/Logo.png"
                alt="ByteSpace"
                fill
                priority
                sizes="(max-width: 640px) 144px, 160px"
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname === ""
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-white/85 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium text-white/90 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Sign In
            </Link>

            <Link href="/signup">
              <Button
                variant="primary"
                size="sm"
                className="font-bold px-5 tracking-wide shadow-sm hover:shadow-primary/30"
              >
                Join Us
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer select-none"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#d4fb20]" />
              <span className="sr-only">Shopping Cart</span>
            </button>
          </div>


          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              className="relative p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200 cursor-pointer select-none"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#d4fb20]" />
              <span className="sr-only">Shopping Cart</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </NMContainer>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-secondary/98 backdrop-blur-xl px-5 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname === ""
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-base font-medium py-2 px-3 rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-primary font-semibold bg-white/10"
                      : "text-white/90 hover:text-primary hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/signin"
                onClick={closeMobileMenu}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link href="/signup" onClick={closeMobileMenu} className="w-full">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  className="font-bold tracking-wide shadow-sm"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;