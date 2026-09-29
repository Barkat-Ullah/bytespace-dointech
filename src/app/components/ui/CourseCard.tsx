"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Course } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "group relative bg-white rounded-3xl p-3.5 sm:p-4 md:p-5 border border-shuttle-gray-200/80 shadow-xs hover:shadow-xl hover:border-shuttle-gray-300 transition-all duration-300 flex flex-col justify-between",
        className
      )}
    >
      {/* Thumbnail Area with Floating Pill Badges */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-shuttle-gray-50 mb-3.5 sm:mb-4">
        <Link href={`/courses/${course.slug}`} className="block w-full h-full">
          <Image
            src={
              imageError
                ? "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                : course.image
            }
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        </Link>

        {/* Translucent overlay pills at bottom of thumbnail */}
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 flex items-center justify-between gap-1 pointer-events-none z-10">
          <span className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-white/95 bg-black/45 backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
            {course.lessonsCount} Lessons
          </span>
          <span className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-white/95 bg-black/45 backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
            {course.duration}
          </span>
          <span className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-white/95 bg-black/45 backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
            {course.commentsCount} Comments
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="flex flex-col flex-1">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-shuttle-gray-950 text-base sm:text-lg leading-snug group-hover:text-secondary transition-colors line-clamp-1">
            <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          </h3>
          <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-shuttle-gray-700 shrink-0 mt-0.5">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-[#abaeb5] text-[#abaeb5]" />
          </div>
        </div>

        {/* Author Line */}
        <p className="text-xs text-shuttle-gray-400 mb-3 sm:mb-4">
          by{" "}
          <Link
            href={`/courses/${course.slug}`}
            className="text-secondary font-medium hover:underline"
          >
            {course.author.name}
          </Link>
        </p>

        {/* Level Badge & Enrolled Avatars */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* Level Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f5f5f6] text-shuttle-gray-700">
            {/* 3-bar signal icon */}
            <svg
              className="w-3.5 h-3.5 text-shuttle-gray-400"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="2" y="10" width="2.5" height="5" rx="1" />
              <rect x="6.5" y="7" width="2.5" height="8" rx="1" />
              <rect x="11" y="3" width="2.5" height="12" rx="1" />
            </svg>
            {course.level}
          </span>

          {/* Student Avatars Stack */}
          <div className="flex items-center">
            {course.enrolledAvatars.slice(0, 3).map((avatarUrl, idx) => (
              <div
                key={idx}
                className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0 shadow-xs"
              >
                <Image
                  src={avatarUrl}
                  alt="Enrolled student avatar"
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
            {course.enrolledExtraCount > 0 && (
              <div className="w-6 h-6 rounded-full bg-[#d4fb20] text-black text-[10px] font-bold flex items-center justify-center -ml-2 border-2 border-white shadow-xs">
                {course.enrolledExtraCount}+
              </div>
            )}
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-auto pt-2 border-t border-shuttle-gray-100 flex items-baseline">
          <span className="text-secondary font-bold text-lg sm:text-xl">
            ${course.price}
          </span>
          <span className="text-xs text-shuttle-gray-400 ml-0.5">
            {course.pricePeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
