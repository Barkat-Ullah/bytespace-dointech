"use client";

import React from "react";
import NMContainer from "@/app/components/ui/Container";
import CourseCard from "@/app/components/ui/CourseCard";
import { Course } from "@/data/mock-data";

export interface CourseGridProps {
  courses: Course[];
  totalCoursesCount: number;
  currentPage: number;
  itemsPerPage: number;
  onResetFilters: () => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  totalCoursesCount,
  currentPage,
  itemsPerPage,
  onResetFilters,
}) => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16">
      <NMContainer>
        {/* Results Count Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between text-xs sm:text-sm text-gray-500">
          <span>
            Showing{" "}
            <strong className="text-gray-900 font-semibold">
              {totalCoursesCount === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
              -
              {Math.min(currentPage * itemsPerPage, totalCoursesCount)}
            </strong>{" "}
            of{" "}
            <strong className="text-gray-900 font-semibold">
              {totalCoursesCount}
            </strong>{" "}
            courses
          </span>
        </div>

        {/* 3-Column Responsive Cards Grid */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {courses.map((course) => (
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
              We couldn&apos;t find any courses matching your current search or filter
              criteria. Try adjusting your search term or clearing the active filters.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#d4fb20] text-black hover:bg-[#c9f116] transition-colors shadow-xs cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </NMContainer>
    </section>
  );
};

export default CourseGrid;
