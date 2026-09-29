"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Course } from "@/data/mock-data";

export interface CourseAboutTabProps {
  course: Course;
}

export const CourseAboutTab: React.FC<CourseAboutTabProps> = ({ course }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Description Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">
          Description
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
          <p>{course.description}</p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by
            immersing yourself in fundamental concepts that form the backbone
            of creative digital creation. Understand the subtle mechanics behind
            effective layout communication, visual balance, and how to harness
            contemporary tools with speed and accuracy.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher
            levels of expertise, delving into the nuances of design principles
            that drive impactful visual experiences. Engage in hands-on
            exercises and iterative critique sessions that reinforce your
            mastery and give you real-world portfolio assets.
          </p>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">
          Sneak Peek
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {course.sneakPeekImages.map((imgUrl, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200/70 group"
            >
              <Image
                src={imgUrl}
                alt={`Course sneak peek screenshot ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key Points Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-4">
          Key Points
        </h2>
        <ul className="space-y-3.5 max-w-3xl">
          {course.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseAboutTab;
