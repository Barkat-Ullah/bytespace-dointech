"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  SlidersHorizontal,
  ChevronDown,
  Check,
  UserCheck,
} from "lucide-react";
import NMContainer from "@/app/components/ui/Container";
import CourseCard from "@/app/components/ui/CourseCard";
import {
  Creator,
  COURSES_MOCK_DATA,
  COURSE_CATEGORIES,
} from "@/data/mock-data";
import { cn } from "@/lib/utils";

export interface CreatorProfileClientProps {
  creator: Creator;
}

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"] as const;

export const CreatorProfileClient: React.FC<CreatorProfileClientProps> = ({ creator }) => {
  const router = useRouter();

  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(creator.followersCount);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("relevant");

  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  // Creator's courses (matching author name)
  const creatorCourses = useMemo(() => {
    let result = COURSES_MOCK_DATA.filter(
      (c) =>
        c.author.name.toLowerCase().includes("purepearl") ||
        c.author.name.toLowerCase() === creator.name.toLowerCase()
    );

    // If level filter
    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // If category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [creator.name, selectedLevel, selectedCategory, sortBy]);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Creator Hero Banner (Blue with common-bg.png) */}
      <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat py-10 sm:py-14 md:py-16 text-white overflow-hidden">
        <NMContainer>
          {/* Back Button */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border border-white/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>

          {/* Creator Profile Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              {/* Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl shrink-0">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              {/* Name & Badge */}
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {creator.name}
                  </h1>
                  <span className="px-3 py-1 rounded-full bg-[#d4fb20] text-black text-xs font-bold uppercase tracking-wider">
                    {creator.badge}
                  </span>
                </div>
                <p className="text-sm text-white/80 mt-1">{creator.role}</p>
              </div>
            </div>

            {/* Follow Button */}
            <div className="shrink-0 self-start md:self-center">
              <button
                type="button"
                onClick={handleFollowToggle}
                className={cn(
                  "px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer select-none",
                  isFollowing
                    ? "bg-white text-secondary"
                    : "bg-[#d4fb20] text-black hover:bg-[#c9f116]"
                )}
              >
                {isFollowing ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span>Follow</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bio text */}
          <div className="mt-6 max-w-3xl space-y-2 text-xs sm:text-sm text-white/85 leading-relaxed">
            {creator.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Stats Pills */}
          <div className="mt-6 flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              {creatorCourses.length} Products
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              {followersCount} Followers
            </span>
          </div>
        </NMContainer>
      </section>

      {/* 2. Filter & Sort Toolbar */}
      <section className="w-full bg-white border-b border-gray-100 py-6">
        <NMContainer>
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel("All Levels");
                  setSelectedCategory("All");
                  setSortBy("relevant");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLevelOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{selectedLevel}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {isLevelOpen && (
                  <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30">
                    {LEVEL_OPTIONS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{selectedCategory === "All" ? "Category" : selectedCategory}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 top-full mt-2 w-52 max-h-64 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory("All");
                        setIsCategoryOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      All Categories
                    </button>
                    {COURSE_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort */}
            <div className="relative ml-auto">
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <span>Most relevant</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-30">
                  <button
                    type="button"
                    onClick={() => {
                      setSortBy("relevant");
                      setIsSortOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Most relevant
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSortBy("rating");
                      setIsSortOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Highest rated
                  </button>
                </div>
              )}
            </div>
          </div>
        </NMContainer>
      </section>

      {/* 3. Courses Grid by this Creator */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16">
        <NMContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </NMContainer>
      </section>
    </div>
  );
};

export default CreatorProfileClient;
