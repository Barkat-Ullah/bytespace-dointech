"use client";

import React, { useState } from "react";
import NMContainer from "@/app/components/ui/Container";
import { Course } from "@/data/mock-data";
import {
  CourseDetailsBanner,
  CourseAboutTab,
  CourseLessonsTab,
  CourseReviewsTab,
} from "@/app/components/pages/course/details";
import { cn } from "@/lib/utils";

export type DetailTabType = "about" | "lessons" | "reviews";

export interface CourseDetailsClientProps {
  course: Course;
}

export const CourseDetailsClient: React.FC<CourseDetailsClientProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<DetailTabType>("about");

  const tabs: { label: string; value: DetailTabType }[] = [
    { label: "About", value: "about" },
    { label: "Lessons", value: "lessons" },
    { label: "Reviews", value: "reviews" },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Course Details Hero Banner with Video & Enrollment Card */}
      <CourseDetailsBanner course={course} />

      {/* 2. White Tabbed Content Area */}
      <div className="w-full bg-white py-12 sm:py-16 md:py-20">
        <NMContainer>
          {/* Tabs Selector Navigation (Pill container) */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#f3f4f6] border border-gray-200/70 shadow-xs">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActiveTab(tab.value)}
                    className={cn(
                      "px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none",
                      isActive
                        ? "bg-[#d4fb20] text-black shadow-xs"
                        : "text-gray-600 hover:text-gray-950 hover:bg-gray-200/60"
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Panel */}
          <div className="animate-in fade-in duration-200">
            {activeTab === "about" && <CourseAboutTab course={course} />}
            {activeTab === "lessons" && <CourseLessonsTab course={course} />}
            {activeTab === "reviews" && <CourseReviewsTab course={course} />}
          </div>
        </NMContainer>
      </div>
    </div>
  );
};

export default CourseDetailsClient;
