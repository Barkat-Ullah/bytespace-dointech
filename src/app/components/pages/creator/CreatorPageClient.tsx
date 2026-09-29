"use client";

import React, { useState, useMemo, useRef } from "react";
import NMContainer from "@/app/components/ui/Container";
import CourseCard from "@/app/components/ui/CourseCard";
import { CoursePagination } from "@/app/components/pages/course";
import { CreatorHeroBanner } from "./CreatorHeroBanner";
import { COURSES_MOCK_DATA, COURSE_CATEGORIES } from "@/data/mock-data";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export const CreatorPageClient: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => ["All", ...COURSE_CATEGORIES], []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  // Filter courses by search query and category
  const filteredCourses = useMemo(() => {
    let list = [...COURSES_MOCK_DATA];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.author.name.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "All") {
      list = list.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return list;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Hero / Navigation Section matching Courses page */}
      <CreatorHeroBanner
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={() => {
          if (gridTopRef.current) {
            gridTopRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* Anchor for smooth scrolling */}
      <div ref={gridTopRef} className="scroll-mt-24" />

      {/* 2. Category Filter Pills Bar */}
      <section className="w-full bg-white border-b border-gray-100 py-6 sm:py-7">
        <NMContainer>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer select-none",
                    isActive
                      ? "bg-[#d4fb20] text-black shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200/80 hover:text-gray-950"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </NMContainer>
      </section>

      {/* 3. Main Course Cards Section (3 cards per row on desktop) */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16">
        <NMContainer>
          {/* Header Count Row */}
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
              courses from top creators
            </span>

            {(searchQuery.trim() !== "" || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-secondary hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Responsive Course Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          {paginatedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {paginatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 px-4 text-center rounded-3xl bg-gray-50 border border-dashed border-gray-200 max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We couldn&apos;t find any courses matching your search. Try adjusting
                your query or selecting a different category.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#d4fb20] text-black hover:bg-[#c9f116] transition-colors shadow-xs cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* 4. Bottom Pagination */}
          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="pb-10 sm:pb-14"
          />
        </NMContainer>
      </section>
    </div>
  );
};

export default CreatorPageClient;
