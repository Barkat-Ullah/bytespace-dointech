"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import NMContainer from "../ui/Container";

interface StatMetric {
  value: string;
  label: string;
}

const metrics: StatMetric[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorFeatures: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const Stats = () => {
  return (
    <section
      aria-label="Platform Highlights and Statistics"
      className="relative w-full bg-[url('/bg-stats.png')] bg-cover bg-center bg-no-repeat overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      <NMContainer>
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-shuttle-gray-950 leading-[1.18] tracking-tight">
                Your Path to Professional
                <br className="hidden sm:inline" />
                {" "}Growth Starts Here!
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-shuttle-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Explore our curated selection of courses tailored to enhance your
                capabilities and accelerate your career journey. Whether you are
                looking to sharpen specific skills, gain industry expertise, or
                embark on a new career path entirely, we have the resources you
                need.
              </p>

              {/* Metrics Row */}
              <div className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-14">
                {metrics.map((item) => (
                  <div key={item.label} className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-xs sm:text-sm text-shuttle-gray-400 font-medium mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic: stats2.png (Student with Learning Progress) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/stats2.png"
                  alt="Student with laptop learning on ByteSpace"
                  width={600}
                  height={590}
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="w-full h-auto object-contain drop-shadow-xl select-none"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Block 2: "Create & Manage Courses Easily."                 */}
          {/* Left: Creator Illustration, Right: Content & Checklist    */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16">
            {/* Left Graphic: stats1.png (Creator with Revenue & Ratings) */}
            <div className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-none transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/stats1.png"
                  alt="Course creator managing analytics and student reviews on ByteSpace"
                  width={560}
                  height={680}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="w-full h-auto object-contain drop-shadow-xl select-none"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-shuttle-gray-950 leading-[1.18] tracking-tight">
                Create & Manage
                <br className="hidden sm:inline" />
                {" "}Courses Easily.
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-shuttle-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <strong className="font-semibold text-shuttle-gray-950">
                  ByteSpace
                </strong>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>

              {/* Checklist */}
              <ul className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4 self-center lg:self-start text-left">
                {creatorFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm shadow-secondary/30">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-shuttle-gray-950">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </NMContainer>
    </section>
  );
};

export default Stats;