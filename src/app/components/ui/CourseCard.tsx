"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className }) => {
  const [imageError, setImageError] = useState(false);

  // Fallback avatars in case mock data has fewer than 4
  const defaultAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  ];

  const avatarsToDisplay =
    course.enrolledAvatars && course.enrolledAvatars.length >= 4
      ? course.enrolledAvatars.slice(0, 4)
      : defaultAvatars;

  return (
    <div
      className={cn(
        "group relative bg-white rounded-[32px] p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between",
        className
      )}
    >
      {/* Thumbnail Area with Floating Frosted Badges */}
      <div className="@container relative aspect-[1.48/1] w-full rounded-[22px] overflow-hidden bg-gray-100">
        <Link
          href={`/courses/${course.slug}`}
          className="relative block w-full h-full"
        >
          <Image
            src={
              imageError
                ? "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80"
                : course.image
            }
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        </Link>

        {/* Translucent light frosted glass pills across bottom of image */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between z-10 pointer-events-none p-2 @[270px]:px-2.5 @[270px]:py-2.5 @[360px]:p-3.5 gap-1 @[320px]:gap-1.5">
          <span className="inline-flex items-center justify-center shrink-0 rounded-full font-medium text-gray-800 bg-white/70 backdrop-blur-md border border-white/50 shadow-xs whitespace-nowrap px-1.5 py-1 text-[10px] tracking-tight @[270px]:px-2 @[270px]:text-[11px] @[320px]:px-2.5 @[320px]:py-1.5 @[320px]:text-xs @[320px]:tracking-normal @[360px]:px-3.5 @[360px]:text-[13px]">
            {course.lessonsCount} Lessons
          </span>
          <span className="inline-flex items-center justify-center shrink-0 rounded-full font-medium text-gray-800 bg-white/70 backdrop-blur-md border border-white/50 shadow-xs whitespace-nowrap px-1.5 py-1 text-[10px] tracking-tight @[270px]:px-2 @[270px]:text-[11px] @[320px]:px-2.5 @[320px]:py-1.5 @[320px]:text-xs @[320px]:tracking-normal @[360px]:px-3.5 @[360px]:text-[13px]">
            {course.duration}
          </span>
          <span className="inline-flex items-center justify-center shrink-0 rounded-full font-medium text-gray-800 bg-white/70 backdrop-blur-md border border-white/50 shadow-xs whitespace-nowrap px-1.5 py-1 text-[10px] tracking-tight @[270px]:px-2 @[270px]:text-[11px] @[320px]:px-2.5 @[320px]:py-1.5 @[320px]:text-xs @[320px]:tracking-normal @[360px]:px-3.5 @[360px]:text-[13px]">
            {course.commentsCount} Comments
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="flex flex-col flex-1 mt-5">
        {/* Title & Rating */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-gray-950 text-xl sm:text-[22px] tracking-tight leading-snug group-hover:text-[#003be2] transition-colors line-clamp-1">
            <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-lg sm:text-xl font-normal text-gray-600">
              {course.rating.toFixed(1)}
            </span>
            {/* Gray filled 5-point star matching design */}
            <svg
              className="w-5 h-5 fill-[#D1D5DB] text-[#D1D5DB]"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Author Line */}
        <p className="text-sm text-gray-500 font-normal mt-1 mb-5">
          by{" "}
          <Link
            href={`/courses/${course.slug}`}
            className="text-[#003be2] hover:underline cursor-pointer"
          >
            {course.author.name}
          </Link>
        </p>

        {/* Level Badge & 4-Student Avatars Stack */}
        <div className="flex items-center justify-between gap-2 mb-5">
          {/* Level Pill */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#f3f4f6] text-gray-800">
            {/* 3-bar signal icon with increasing heights */}
            <svg
              className="w-4 h-4 text-gray-700"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="2" y="9.5" width="2.5" height="5.5" rx="1.2" />
              <rect x="6.5" y="6" width="2.5" height="9" rx="1.2" />
              <rect x="11" y="2" width="2.5" height="13" rx="1.2" />
            </svg>
            {course.level}
          </span>

          {/* Student Avatars Stack (4 Avatars + Lime Count) */}
          <div className="flex items-center">
            {avatarsToDisplay.map((avatarUrl, idx) => (
              <div
                key={idx}
                className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2.5 first:ml-0 shadow-xs"
              >
                <Image
                  src={avatarUrl}
                  alt="Enrolled student avatar"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            {course.enrolledExtraCount > 0 && (
              <div className="w-8 h-8 rounded-full bg-[#d4fb20] text-black text-xs font-bold flex items-center justify-center -ml-2.5 border-2 border-white shadow-xs">
                {course.enrolledExtraCount}+
              </div>
            )}
          </div>
        </div>

        {/* Price Row (Cleanly spaced without divider) */}
        <div className="mt-auto flex items-baseline">
          <span className="text-[#003be2] font-black text-2xl sm:text-[26px] tracking-tight">
            ${course.price}
          </span>
          <span className="text-sm text-gray-500 font-normal ml-0.5">
            {course.pricePeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
