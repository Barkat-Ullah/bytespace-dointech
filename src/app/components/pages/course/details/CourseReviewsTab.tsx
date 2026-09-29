"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Course } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export interface CourseReviewsTabProps {
  course: Course;
}

export const CourseReviewsTab: React.FC<CourseReviewsTabProps> = ({ course }) => {
  const [selectedStarFilter, setSelectedStarFilter] = useState<number | null>(null);

  const starFilters = [
    { label: "Rating", value: null },
    { label: "★ 5", value: 5 },
    { label: "★ 4", value: 4 },
    { label: "★ 3", value: 3 },
    { label: "★ 2", value: 2 },
    { label: "★ 1", value: 1 },
  ];

  const filteredReviews = selectedStarFilter
    ? course.reviews.filter((r) => r.rating === selectedStarFilter)
    : course.reviews;

  // Breakdown distribution data
  const breakdown = [
    { stars: 5, percent: 80, count: 120 },
    { stars: 4, percent: 40, count: 31 },
    { stars: 3, percent: 25, count: 15 },
    { stars: 2, percent: 12, count: 5 },
    { stars: 1, percent: 4, count: 1 },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Rating Overview Card Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-2">
          Individuals are saying
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl leading-relaxed">
          Discover what our learners have to say about their experience with this course. Read
          honest and inspiring testimonials from students who have benefited from the
          creative and comprehensive instructions.
        </p>

        {/* Rating Score & Star Breakdown Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#fafafa] border border-gray-200/80 max-w-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 shadow-xs">
          {/* Lime Score Box */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#d4fb20] text-black flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-md">
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Average
            </span>
            <span className="text-4xl sm:text-5xl font-black tracking-tight mt-0.5">
              {course.rating.toFixed(1)}
            </span>
          </div>

          {/* Star Distribution Bars */}
          <div className="w-full space-y-2">
            {breakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs text-gray-600">
                {/* mini stars representation */}
                <div className="flex items-center gap-0.5 w-16 shrink-0">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < row.stars
                          ? "fill-[#abaeb5] text-[#abaeb5]"
                          : "fill-transparent text-gray-300"
                      )}
                    />
                  ))}
                </div>

                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-[#d4fb20] rounded-full"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>

                <span className="w-8 text-right font-medium text-gray-500">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Reviews Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">
          Individual Reviews:
        </h2>

        {/* Filter Pills: Rating, 5, 4, 3, 2, 1 */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {starFilters.map((sf) => {
            const isActive = selectedStarFilter === sf.value;
            return (
              <button
                key={sf.label}
                type="button"
                onClick={() => setSelectedStarFilter(sf.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none",
                  isActive
                    ? "bg-[#d4fb20] text-black shadow-xs font-bold"
                    : "bg-[#f3f4f6] text-gray-700 hover:bg-gray-200"
                )}
              >
                {sf.label}
              </button>
            );
          })}
        </div>

        {/* Reviews List */}
        <div className="space-y-5 max-w-3xl">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <Image
                        src={rev.userAvatar}
                        alt={rev.userName}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-950">
                        {rev.userName}
                      </h4>
                      <p className="text-xs text-gray-400">{rev.userRole}</p>
                    </div>
                  </div>

                  <span className="text-xs text-gray-400 shrink-0">
                    {rev.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < rev.rating
                          ? "fill-[#abaeb5] text-[#abaeb5]"
                          : "fill-transparent text-gray-300"
                      )}
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <div className="py-12 text-center rounded-2xl bg-gray-50 border border-dashed border-gray-200">
              <p className="text-sm text-gray-500">
                No reviews found for this rating filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseReviewsTab;
