"use client";

import React, { useState, useEffect } from "react";
import { SlidersHorizontal, ChevronDown, RotateCcw } from "lucide-react";
import NMContainer from "@/app/components/ui/Container";
import { cn } from "@/lib/utils";

export interface SortOption {
  label: string;
  value: string;
}

export interface CourseFilterToolbarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  categories: readonly string[];
  levelOptions: readonly string[];
  sortOptions: readonly SortOption[];
}

export const CourseFilterToolbar: React.FC<CourseFilterToolbarProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  sortBy,
  onSortChange,
  onResetFilters,
  hasActiveFilters,
  categories,
  levelOptions,
  sortOptions,
}) => {
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) {
        setIsLevelOpen(false);
        setIsCategoryOpen(false);
        setIsSortOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <section className="w-full bg-white border-b border-gray-100 py-6 sm:py-8">
      <NMContainer>
        {/* Top Filter Controls: Filter / Level / Category / Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Left Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Filter Toggle / Reset */}
            <button
              type="button"
              onClick={onResetFilters}
              className={cn(
                "inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer",
                hasActiveFilters
                  ? "bg-[#d4fb20]/20 border-[#d4fb20] text-gray-900 font-semibold"
                  : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              )}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
              <span>Filter</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-secondary" />
              )}
            </button>

            {/* Level Dropdown */}
            <div className="relative" data-dropdown>
              <button
                type="button"
                onClick={() => {
                  setIsLevelOpen((prev) => !prev);
                  setIsCategoryOpen(false);
                  setIsSortOpen(false);
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer",
                  selectedLevel !== "All Levels"
                    ? "border-secondary text-secondary bg-secondary/5 font-semibold"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                <span>{selectedLevel}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-gray-400 transition-transform",
                    isLevelOpen && "rotate-180"
                  )}
                />
              </button>

              {isLevelOpen && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                  {levelOptions.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        onLevelChange(lvl);
                        setIsLevelOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                        selectedLevel === lvl
                          ? "bg-gray-100 font-bold text-gray-900"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative" data-dropdown>
              <button
                type="button"
                onClick={() => {
                  setIsCategoryOpen((prev) => !prev);
                  setIsLevelOpen(false);
                  setIsSortOpen(false);
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer",
                  selectedCategory !== "All"
                    ? "border-secondary text-secondary bg-secondary/5 font-semibold"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                <span>Category: {selectedCategory}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-gray-400 transition-transform",
                    isCategoryOpen && "rotate-180"
                  )}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    type="button"
                    onClick={() => {
                      onCategoryChange("All");
                      setIsCategoryOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                      selectedCategory === "All"
                        ? "bg-gray-100 font-bold text-gray-900"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    All Categories
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onCategoryChange("Featured");
                      setIsCategoryOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                      selectedCategory === "Featured"
                        ? "bg-gray-100 font-bold text-gray-900"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    Featured
                  </button>
                  {categories
                    .filter((c) => c !== "Featured")
                    .map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          onCategoryChange(cat);
                          setIsCategoryOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                          selectedCategory === cat
                            ? "bg-gray-100 font-bold text-gray-900"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* Reset Filters Pill */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right Sort Dropdown */}
          <div className="relative ml-auto" data-dropdown>
            <button
              type="button"
              onClick={() => {
                setIsSortOpen((prev) => !prev);
                setIsLevelOpen(false);
                setIsCategoryOpen(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
            >
              <span>
                {sortOptions.find((s) => s.value === sortBy)?.label || "Most relevant"}
              </span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 text-gray-400 transition-transform",
                  isSortOpen && "rotate-180"
                )}
              />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value);
                      setIsSortOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                      sortBy === opt.value
                        ? "bg-gray-100 font-bold text-gray-900"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filter Pills Row */}
        <div className="mt-6 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
          <button
            type="button"
            onClick={() => onCategoryChange("All")}
            className={cn(
              "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none",
              selectedCategory === "All"
                ? "bg-[#d4fb20] text-black shadow-xs hover:bg-[#c9f116]"
                : "bg-[#f5f5f6] text-shuttle-gray-700 hover:bg-[#ebebed] hover:text-shuttle-gray-950"
            )}
          >
            All
          </button>

          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none",
                  isActive
                    ? "bg-[#d4fb20] text-black shadow-xs hover:bg-[#c9f116]"
                    : "bg-[#f5f5f6] text-shuttle-gray-700 hover:bg-[#ebebed] hover:text-shuttle-gray-950"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </NMContainer>
    </section>
  );
};

export default CourseFilterToolbar;
