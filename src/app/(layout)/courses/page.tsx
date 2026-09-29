"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import NMContainer from "@/app/components/ui/Container";
import CourseCard from "@/app/components/ui/CourseCard";
import {
  COURSES_MOCK_DATA,
  COURSE_CATEGORIES,
} from "@/data/mock-data";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"] as const;

const SORT_OPTIONS = [
  { label: "Most relevant", value: "relevant" },
  { label: "Highest rated", value: "rating" },
  { label: "Most popular", value: "popular" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
] as const;

function CoursesContent() {
  const searchParams = useSearchParams();
  const gridTopRef = useRef<HTMLDivElement>(null);

  // Compute initial category from URL search params if present
  const categoryParam = searchParams.get("category");
  const initialCategory = useMemo(() => {
    if (!categoryParam) return "All";
    const matched = COURSE_CATEGORIES.find(
      (c) => c.toLowerCase() === categoryParam.toLowerCase()
    );
    if (matched) return matched;
    if (categoryParam.toLowerCase() === "featured") return "Featured";
    return "All";
  }, [categoryParam]);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [sortBy, setSortBy] = useState<string>("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown open states
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

  // Filter handlers that update state and reset page to 1
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setSortBy("relevant");
    setCurrentPage(1);
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...COURSES_MOCK_DATA];

    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.subtitle.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query) ||
          c.author.name.toLowerCase().includes(query)
      );
    }

    // 2. Category Filter
    if (selectedCategory === "Featured") {
      result = result.filter((c) => c.isFeatured);
    } else if (selectedCategory !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 3. Level Filter
    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // 4. Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        result.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // relevant keeps original order
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (gridTopRef.current) {
        gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedLevel !== "All Levels" ||
    sortBy !== "relevant";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ========================================================= */}
      {/* 1. Hero Search Banner (Vibrant Blue with grid overlay)   */}
      {/* ========================================================= */}
      <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <NMContainer>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
              Find Your Next Course
            </h1>

            {/* Search Bar matching design */}
            <div className="w-full max-w-xl sm:max-w-2xl mt-6 sm:mt-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-primary/40"
              >
                {/* Search Icon */}
                <Search className="w-5 h-5 text-gray-400 ml-3.5 sm:ml-4 shrink-0" />

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm sm:text-base text-gray-900 placeholder-gray-400 px-3 py-1.5"
                />

                {/* Right Action Button (Lime Pill) */}
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#d4fb20] text-black font-bold text-xs sm:text-sm hover:bg-[#c9f116] transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer select-none"
                >
                  <span>Courses</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </NMContainer>
      </section>

      {/* Anchor for smooth scroll when changing page */}
      <div ref={gridTopRef} className="scroll-mt-24" />

      {/* ========================================================= */}
      {/* 2. Filter & Sort Toolbar                                   */}
      {/* ========================================================= */}
      <section className="w-full bg-white border-b border-gray-100 py-6 sm:py-8">
        <NMContainer>
          {/* Top Filter Controls: Filter / Level / Category / Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            {/* Left Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Filter Reset / Toggle Button */}
              <button
                type="button"
                onClick={handleResetFilters}
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
                  <ChevronDown className={cn("w-3.5 h-3.5 text-gray-400 transition-transform", isLevelOpen && "rotate-180")} />
                </button>

                {isLevelOpen && (
                  <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                    {LEVEL_OPTIONS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          handleLevelChange(lvl);
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
                  <ChevronDown className={cn("w-3.5 h-3.5 text-gray-400 transition-transform", isCategoryOpen && "rotate-180")} />
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        handleCategoryChange("All");
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
                        handleCategoryChange("Featured");
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
                    {COURSE_CATEGORIES.filter((c) => c !== "Featured").map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          handleCategoryChange(cat);
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

              {/* Reset filter pill if active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
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
                  {SORT_OPTIONS.find((s) => s.value === sortBy)?.label || "Most relevant"}
                </span>
                <ChevronDown className={cn("w-3.5 h-3.5 text-gray-400 transition-transform", isSortOpen && "rotate-180")} />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        handleSortChange(opt.value);
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

          {/* Category Filter Pills Row (matching home design) */}
          <div className="mt-6 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            <button
              type="button"
              onClick={() => handleCategoryChange("All")}
              className={cn(
                "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none",
                selectedCategory === "All"
                  ? "bg-[#d4fb20] text-black shadow-xs hover:bg-[#c9f116]"
                  : "bg-[#f5f5f6] text-shuttle-gray-700 hover:bg-[#ebebed] hover:text-shuttle-gray-950"
              )}
            >
              All
            </button>

            {COURSE_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
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

      {/* ========================================================= */}
      {/* 3. Main Course Cards Grid                                  */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16">
        <NMContainer>
          {/* Results Summary count */}
          <div className="mb-6 sm:mb-8 flex items-center justify-between text-xs sm:text-sm text-gray-500">
            <span>
              Showing{" "}
              <strong className="text-gray-900 font-semibold">
                {filteredCourses.length === 0
                  ? 0
                  : (currentPage - 1) * ITEMS_PER_PAGE + 1}
                -
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredCourses.length)}
              </strong>{" "}
              of{" "}
              <strong className="text-gray-900 font-semibold">
                {filteredCourses.length}
              </strong>{" "}
              courses
            </span>
          </div>

          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {paginatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-20 px-4 text-center rounded-3xl bg-gray-50 border border-dashed border-gray-200 max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We couldn&apos;t find any courses matching your current search or filter
                criteria. Try adjusting your search term or clearing the active filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#d4fb20] text-black hover:bg-[#c9f116] transition-colors shadow-xs"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. Bottom Pagination (< 1 2 3 4 5 >)                      */}
          {/* ========================================================= */}
          {totalPages > 1 && (
            <div className="mt-14 sm:mt-16 md:mt-20 flex items-center justify-center gap-1.5 sm:gap-2 select-none">
              {/* Previous Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed text-gray-300"
                    : "hover:bg-gray-100 text-gray-800"
                )}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={cn(
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-semibold transition-all cursor-pointer",
                      isActive
                        ? "bg-gray-950 text-white shadow-xs"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed text-gray-300"
                    : "hover:bg-gray-100 text-gray-800"
                )}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </NMContainer>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-20 text-center flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-secondary" />
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}