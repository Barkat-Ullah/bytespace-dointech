"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, Plus, BookOpen, Users } from "lucide-react";
import { Creator } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export interface CreatorCardProps {
  creator: Creator;
  className?: string;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ creator, className }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);
  const [imageError, setImageError] = useState(false);

  const handleFollowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <div
      className={cn(
        "group relative bg-white rounded-[32px] p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between",
        className
      )}
    >
      <div className="relative aspect-[1.48/1] w-full rounded-[22px] overflow-hidden bg-gray-100">
        <Link
          href={`/creators/${creator.slug}`}
          className="relative block w-full h-full"
        >
          <Image
            src={
              imageError
                ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                : creator.avatar
            }
            alt={creator.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        </Link>

        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#d4fb20] text-black shadow-xs">
            {creator.badge}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-gray-800 bg-white/85 backdrop-blur-md border border-white/50 shadow-xs whitespace-nowrap">
            <Users className="w-3.5 h-3.5 text-secondary" />
            {formatNumber(followers)} Followers
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-gray-800 bg-white/85 backdrop-blur-md border border-white/50 shadow-xs whitespace-nowrap">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            {creator.productsCount} Courses
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 mt-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-gray-950 text-xl sm:text-[22px] tracking-tight leading-snug group-hover:text-[#003be2] transition-colors line-clamp-1">
            <Link href={`/creators/${creator.slug}`}>{creator.name}</Link>
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-lg sm:text-xl font-normal text-gray-600">
              {creator.rating.toFixed(1)}
            </span>
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        <p className="text-sm text-secondary font-semibold mt-1">
          {creator.username}
        </p>

        <p className="text-sm text-gray-500 font-normal mt-2 mb-4 line-clamp-2 leading-relaxed">
          {creator.shortBio || creator.role}
        </p>

        <div className="mb-5 flex items-center justify-between">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f3f4f6] text-gray-800">
            {creator.category}
          </span>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2.5">
          <Link
            href={`/creators/${creator.slug}`}
            className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50 text-center transition-colors cursor-pointer select-none"
          >
            View Profile
          </Link>

          <button
            type="button"
            onClick={handleFollowClick}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer select-none",
              isFollowing
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-[#d4fb20] text-black hover:bg-[#c9f116]"
            )}
          >
            {isFollowing ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Following</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Follow</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
