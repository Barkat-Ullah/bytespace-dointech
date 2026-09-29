"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import NMContainer from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import CourseCard from "../ui/CourseCard";
import { COURSES_MOCK_DATA, COURSE_CATEGORIES } from "@/data/mock-data";
import { cn } from "@/lib/utils";

const CourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");

  // Filter courses based on active category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "Featured") {
      return COURSES_MOCK_DATA.filter((course) => course.isFeatured);
    }
    return COURSES_MOCK_DATA.filter(
      (course) => course.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <section
      aria-label="Courses Catalog"
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <NMContainer>
        <SectionHeader
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          align="center"
          theme="light"
          titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-shuttle-gray-950 tracking-tight"
          subtitleClassName="text-xs sm:text-sm md:text-base text-shuttle-gray-400 max-w-2xl sm:max-w-3xl mx-auto"
        />

        {/* Filter Category Pills */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
          {COURSE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                  isActive
                    ? "bg-[#d4fb20] text-black shadow-xs hover:bg-[#c9f116]"
                    : "bg-[#f5f5f6] text-shuttle-gray-700 hover:bg-[#ebebed] hover:text-shuttle-gray-950"
                )}
              >
                {category}
              </button>
            );
          })}

          <Link
            href="/courses"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-secondary hover:underline transition-colors flex items-center gap-1"
          >
            + More
          </Link>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {filteredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-12 py-16 px-4 text-center rounded-3xl bg-shuttle-gray-50/60 border border-dashed border-shuttle-gray-200 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-shuttle-gray-950 mb-2">
              No courses found in &quot;{selectedCategory}&quot;
            </h3>
            <p className="text-sm text-shuttle-gray-400 mb-6">
              We are constantly adding new courses to this collection. Check back soon or explore our featured courses.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("Featured")}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#d4fb20] text-black hover:bg-[#c9f116] transition-colors"
            >
              Back to Featured
            </button>
          </div>
        )}
      </NMContainer>
    </section>
  );
};

export default CourseSection;