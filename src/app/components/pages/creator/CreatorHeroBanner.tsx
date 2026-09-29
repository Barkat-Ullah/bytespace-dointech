"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";
import NMContainer from "@/app/components/ui/Container";

export interface CreatorHeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCreatorsButtonClick?: () => void;
}

export const CreatorHeroBanner: React.FC<CreatorHeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  onCreatorsButtonClick,
}) => {
  return (
    <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <NMContainer>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Creator Discovery Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
            Find Your Next Creator
          </h1>

          {/* Contextual Subtitle */}
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
            Discover and connect with top instructors, industry practitioners, and creative
            mentors sharing their expertise on ByteSpace.
          </p>

          {/* Creator Search Bar */}
          <div className="w-full max-w-xl sm:max-w-2xl mt-6 sm:mt-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-primary/40"
            >
              {/* Search Icon */}
              <Search className="w-5 h-5 text-gray-400 ml-3.5 sm:ml-4 shrink-0" />

              {/* Input */}
              <input
                type="text"
                placeholder="Search creators by name, role, or username..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm sm:text-base text-gray-900 placeholder-gray-400 px-3 py-1.5"
              />

              {/* Action Button */}
              <button
                type="button"
                onClick={onCreatorsButtonClick}
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#d4fb20] text-black font-bold text-xs sm:text-sm hover:bg-[#c9f116] transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer select-none"
              >
                <span>Creators</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </NMContainer>
    </section>
  );
};

export default CreatorHeroBanner;
