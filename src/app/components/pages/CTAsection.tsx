"use client";

import React from "react";
import Image from "next/image";
import NMContainer from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const CTAsection = () => {
  return (
    <section
      aria-label="Creator Call to Action"
      className="relative w-full bg-secondary overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 flex items-center justify-center min-h-[420px] sm:min-h-[460px] md:min-h-[488px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-section.png"
          alt="ByteSpace Creator Community"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-secondary/35 sm:bg-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <NMContainer>
          <SectionHeader
            title={
              <>
                Unlock Your Potential as a
                <br className="hidden sm:inline" />
                {" "}Creator with ByteSpace
              </>
            }
            subtitle="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
            buttonText="Join as Creator"
            buttonHref="/creators"
            buttonVariant="primary"
            buttonSize="md"
            theme="dark"
            align="center"
            titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[44px] font-bold text-white tracking-tight leading-[1.18]"
            subtitleClassName="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto"
          />
        </NMContainer>
      </div>
    </section>
  );
};

export default CTAsection;