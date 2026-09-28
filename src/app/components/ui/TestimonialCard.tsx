"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  quote,
  className,
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-shuttle-gray-200/50 hover:border-primary/50",
        className
      )}
    >
      {/* User Avatar */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={avatar}
          alt={`${name}'s photo`}
          fill
          sizes="64px"
          className="object-cover select-none"
        />
      </div>

      {/* User Details */}
      <div className="mt-4 sm:mt-5">
        <h3 className="font-bold text-base sm:text-lg text-shuttle-gray-950 group-hover:text-secondary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-secondary mt-0.5">
          {role}
        </p>
      </div>

      {/* Quote */}
      <blockquote className="mt-4 sm:mt-5 text-xs sm:text-sm text-shuttle-gray-700 leading-relaxed flex-1">
        {quote}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
