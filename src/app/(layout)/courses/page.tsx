"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  COURSES_MOCK_DATA,
  COURSE_CATEGORIES,
} from "@/data/mock-data";
import {
  CourseHeroBanner,
  CourseFilterToolbar,
  CourseGrid,
  CoursePagination,
} from "@/app/components/pages/course";

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

  const queryParam = searchParams.get("search") || searchParams.get("q") || "";

  // Filter & Pagination States
  const [userQuery, setUserQuery] = useState<string | null>(null);
  const searchQuery = userQuery ?? queryParam;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [sortBy, setSortBy] = useState<string>("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to grid on incoming search query from external navigation
  useEffect(() => {
    if (queryParam) {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [queryParam]);

  // Filter handlers
  const handleSearchChange = (query: string) => {
    setUserQuery(query);
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
    setUserQuery("");
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setSortBy("relevant");
    setCurrentPage(1);
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...COURSES_MOCK_DATA];

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

    if (selectedCategory === "Featured") {
      result = result.filter((c) => c.isFeatured);
    } else if (selectedCategory !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

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
      <CourseHeroBanner
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onCoursesButtonClick={() => {
          if (gridTopRef.current) {
            gridTopRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <div ref={gridTopRef} className="scroll-mt-24" />

      <CourseFilterToolbar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        onResetFilters={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
        categories={COURSE_CATEGORIES}
        levelOptions={LEVEL_OPTIONS}
        sortOptions={SORT_OPTIONS}
      />

      {/* Main Course Cards Grid */}
      <CourseGrid
        courses={paginatedCourses}
        totalCoursesCount={filteredCourses.length}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
        onResetFilters={handleResetFilters}
      />

      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="pb-16 sm:pb-20"
      />
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