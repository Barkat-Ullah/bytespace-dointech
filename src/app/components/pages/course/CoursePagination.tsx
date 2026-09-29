"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const CoursePagination: React.FC<CoursePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className={cn(
        "mt-14 sm:mt-16 md:mt-20 flex items-center justify-center gap-1.5 sm:gap-2 select-none",
        className
      )}
    >
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={cn(
          "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
          currentPage === 1
            ? "opacity-30 cursor-not-allowed text-gray-300"
            : "hover:bg-gray-100 text-gray-800"
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
        const isActive = currentPage === pageNum;
        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-semibold transition-all cursor-pointer",
              isActive
                ? "bg-gray-950 text-white shadow-xs"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
            )}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={cn(
          "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
          currentPage === totalPages
            ? "opacity-30 cursor-not-allowed text-gray-300"
            : "hover:bg-gray-100 text-gray-800"
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CoursePagination;
