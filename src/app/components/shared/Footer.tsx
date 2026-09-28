"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NMContainer from "../ui/Container";
import Button from "../ui/Button";

interface FooterLink {
  label: string;
  href: string;
}

interface LinkGroup {
  links: FooterLink[];
}

const linkGroups: LinkGroup[] = [
  {
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it-software" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer
      aria-label="Site Footer"
      className="w-full bg-white border-t border-shuttle-gray-200/60 pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12"
    >
      <NMContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0">
                <Image
                  src="/Vector.png"
                  alt="ByteSpace Icon"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 select-none"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-shuttle-gray-950 font-sans">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Text */}
            <p className="mt-4 text-xs sm:text-sm text-shuttle-gray-700 leading-relaxed max-w-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex items-center gap-2 sm:gap-3 max-w-md"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-shuttle-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="font-bold px-6 sm:px-7 py-2.5 text-xs sm:text-sm shrink-0 shadow-sm hover:shadow-primary/30"
              >
                Search
              </Button>
            </form>

            {/* Subscription Success Feedback */}
            {subscribed && (
              <p className="mt-2 text-xs font-semibold text-secondary animate-in fade-in duration-200">
                ✓ Thank you for subscribing to our newsletter!
              </p>
            )}

            {/* Privacy Disclaimer */}
            <p className="mt-3.5 text-[11px] sm:text-xs text-shuttle-gray-400 leading-normal max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Column: 3 Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {linkGroups.map((group, groupIdx) => (
              <ul key={groupIdx} className="space-y-3 sm:space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-shuttle-gray-700 hover:text-secondary font-normal transition-colors duration-200 block focus-visible:outline-none focus-visible:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-shuttle-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-shuttle-gray-400 text-center sm:text-left">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-shuttle-gray-400">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-shuttle-gray-950 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </NMContainer>
    </footer>
  );
};

export default Footer;