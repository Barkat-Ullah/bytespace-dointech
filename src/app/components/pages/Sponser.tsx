"use client";

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
      className="w-full bg-shuttle-gray-50 py-10 md:py-14 lg:py-16 border-y border-shuttle-gray-200/60"
    >
      <NMContainer>
      
        <div className="hidden md:flex items-center justify-between w-full">
          {sponsors.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer ${
                index === 0
                  ? "justify-start"
                  : index === sponsors.length - 1
                  ? "justify-end"
                  : "justify-center"
              }`}
            >
              <Image
                src={item.src}
                alt={item.name}
                className="h-7 md:h-8 lg:h-9 w-auto object-contain select-none"
                priority={item.id <= 3}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center gap-6 sm:gap-8">
          {sponsors.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center transition-transform duration-200 hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer ${
                index === 4
                  ? "col-span-2 sm:col-span-1 justify-center"
                  : index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <Image
                src={item.src}
                alt={item.name}
                className="h-6 sm:h-7 w-auto object-contain select-none"
                priority={item.id <= 2}
              />
            </div>
          ))}
        </div>
      </NMContainer>
    </section>
  );
};

export default Sponsor;