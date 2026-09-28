"use client";

import React from "react";
import Image from "next/image";
import NMContainer from "../ui/Container";

import logo1 from "@/asset/sponser/logo-1.png";
import logo2 from "@/asset/sponser/logo-2.png";
import logo3 from "@/asset/sponser/logo-3.png";
import logo4 from "@/asset/sponser/logo-4.png";
import logo5 from "@/asset/sponser/logo-5.png";

const sponsors = [
  { id: 1, name: "Logoipsum Waves", src: logo1 },
  { id: 2, name: "Logoipsum Sunburst", src: logo2 },
  { id: 3, name: "Logoipsum Bolt", src: logo3 },
  { id: 4, name: "Logoipsum Quad", src: logo4 },
  { id: 5, name: "Logoipsum Sphere", src: logo5 },
];

const Sponsor = () => {
  return (
    <section
      aria-label="Trusted Sponsors and Partners"
      className="w-full bg-shuttle-gray-50 py-10 sm:py-12 md:py-14 lg:py-16 border-y border-shuttle-gray-200/60"
    >
      <NMContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-16">
          {sponsors.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center w-full last:col-span-2 sm:last:col-span-1"
            >
              <div className="relative transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.name}
                  className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain select-none"
                  priority={item.id <= 3}
                />
              </div>
            </div>
          ))}
        </div>
      </NMContainer>
    </section>
  );
};

export default Sponsor;