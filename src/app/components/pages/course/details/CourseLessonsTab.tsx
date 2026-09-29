"use client";

import React from "react";
import { Video } from "lucide-react";
import { Course } from "@/data/mock-data";

export interface CourseLessonsTabProps {
  course: Course;
}

export const CourseLessonsTab: React.FC<CourseLessonsTabProps> = ({ course }) => {
  const progressPercent = course.learningProgress || 55;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Explore the Modules Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3">
          Explore the Modules
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
          Immerse yourself in the course content as we break down each module into
          comprehensive lessons, providing practical insights and hands-on
          experiences that build real capability.
        </p>
      </section>

      {/* Lesson List Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-6">
          Lesson List
        </h2>

        <div className="space-y-4 max-w-4xl">
          {course.modules.map((module) => (
            <div
              key={module.id}
              className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#fafafa] border border-gray-200/70 hover:border-gray-300 hover:bg-white transition-all shadow-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#d4fb20] text-black flex items-center justify-center shrink-0 shadow-xs">
                <Video className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Module Text Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-gray-950 text-base sm:text-lg">
                    {module.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400">
                    {module.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Content Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-3">
          Lesson Content
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
          Engage with each lesson through captivating video content, detailed textual
          explanations, and interactive elements. Download resources, complete
          assignments, and test your understanding with guided quizzes and practical
          checklists.
        </p>
      </section>

      {/* Lesson Progress Tracking */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">
          Lesson Progress Tracking
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Witness your growth as you complete lessons, with an intuitive progress tracking
          feature guiding you through your learning journey.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#fafafa] border border-gray-200/80 max-w-xl">
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-xs sm:text-sm font-semibold text-gray-600">
              Learning Progress
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-gray-950">
              {progressPercent}%
            </span>
          </div>

          {/* Progress Bar with Lime Accent */}
          <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-[#d4fb20] rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseLessonsTab;
