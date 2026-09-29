"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Star,
  Users,
  Play,
  FileText,
  Video,
  Award,
  MessageSquare,
  Compass,
} from "lucide-react";
import NMContainer from "@/app/components/ui/Container";
import { Course } from "@/data/mock-data";
import { showEnrollComingSoonAlert } from "@/lib/alerts";

export interface CourseDetailsBannerProps {
  course: Course;
}

export const CourseDetailsBanner: React.FC<CourseDetailsBannerProps> = ({ course }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-14 md:pb-16 overflow-visible">
      <NMContainer>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2]">
              {course.title}: A Comprehensive Guide
            </h1>

            <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
              {course.subtitle}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/70">
              by{" "}
              <Link
                href="/creators/purepearl-studio"
                className="text-white font-medium hover:underline cursor-pointer"
              >
                {course.author.name}
              </Link>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                <Compass className="w-3.5 h-3.5 text-[#d4fb20]" />
                {course.level}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                <Star className="w-3.5 h-3.5 fill-[#d4fb20] text-[#d4fb20]" />
                {course.rating.toFixed(1)} ({course.reviewsCount} reviews)
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                <Users className="w-3.5 h-3.5 text-[#d4fb20]" />
                {course.studentsCount} Students
              </span>
            </div>
          </div>

          <div className="shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={handleShare}
              className="px-5 py-2.5 rounded-full bg-[#d4fb20] text-black font-bold text-xs sm:text-sm hover:bg-[#c9f116] transition-all flex items-center gap-2 shadow-md cursor-pointer select-none"
            >
              <Share2 className="w-4 h-4" />
              <span>{isCopied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Video Player & Right Sidebar Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/30 border border-white/20 shadow-2xl group">
              {isPlaying ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-950 text-white p-6 text-center">
                  <Video className="w-12 h-12 text-[#d4fb20] animate-pulse mb-3" />
                  <p className="font-semibold text-lg">Preview Video Stream Active</p>
                  <p className="text-xs text-white/60 mt-1 max-w-sm">
                    Streaming lessons from PurePearl Studio. Click anywhere to pause.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                  >
                    Pause Preview
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                    alt={course.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 backdrop-brightness-95 pointer-events-none" />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play Course Video Preview"
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-md text-gray-900 flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-300 shadow-2xl cursor-pointer group-hover:shadow-primary/40"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-gray-900 ml-1 text-gray-900" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Floating Sidebar Card with outer wrapper */}
          <div className="lg:col-span-5 relative z-20 lg:-mb-[420px]">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-2xl text-gray-900">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight">
                112 Lessons (24 hours)
              </h2>

              <div className="mt-4 space-y-2.5 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between text-xs sm:text-sm py-1">
                  <span className="font-medium text-gray-800 line-clamp-1">
                    01. Introduction to Digital Assets
                  </span>
                  <span className="text-[#003be2] font-semibold text-xs shrink-0 cursor-pointer hover:underline">
                    12 mins
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1">
                  <span className="font-medium text-gray-800 line-clamp-1">
                    02. Design Principles for Impact
                  </span>
                  <span className="text-[#003be2] font-semibold text-xs shrink-0 cursor-pointer hover:underline">
                    21 mins
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1">
                  <span className="font-medium text-gray-800 line-clamp-1">
                    03. Advanced Techniques in Digital Creation
                  </span>
                  <span className="text-[#003be2] font-semibold text-xs shrink-0 cursor-pointer hover:underline">
                    16 mins
                  </span>
                </div>
                <p className="text-xs text-gray-400 pt-1">99 more videos</p>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <div className="mt-4 flex items-baseline">
                <span className="text-[#003be2] font-black text-3xl sm:text-4xl tracking-tight">
                  ${course.price}
                </span>
                <span className="text-sm text-gray-400 font-normal ml-1">
                  {course.pricePeriod}
                </span>
              </div>

              <button
                type="button"
                onClick={() => showEnrollComingSoonAlert(course.title)}
                className="mt-4 w-full py-3.5 rounded-full bg-[#d4fb20] text-black font-bold text-sm sm:text-base hover:bg-[#c9f116] transition-colors shadow-sm text-center block cursor-pointer select-none"
              >
                Enroll Now
              </button>

              {/* "This course include" checklist */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <h3 className="font-bold text-sm text-gray-950 mb-3">
                  This course include
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-secondary shrink-0" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-secondary shrink-0" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-secondary shrink-0" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-secondary shrink-0" />
                    <span>Private Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 shrink-0">
                    <Image
                      src={course.author.avatar}
                      alt={course.author.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-950 capitalize">
                      {course.author.name}
                    </h4>
                    <p className="text-xs text-gray-400">{course.author.title}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* See Full Profile Button -> Navigates to Creator Profile */}
                <Link
                  href="/creators/purepearl-studio"
                  className="w-full py-2.5 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors text-center block cursor-pointer"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </NMContainer>
    </section>
  );
};

export default CourseDetailsBanner;
