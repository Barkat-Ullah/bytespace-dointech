"use client";

import React from "react";
import Link from "next/link";
import Button, { ButtonProps } from "./Button";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  buttonIcon?: React.ReactNode;
  align?: "center" | "left" | "right";
  theme?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  onButtonClick,
  buttonVariant = "primary",
  buttonSize = "md",
  buttonIcon,
  align = "center",
  theme = "light",
  className,
  titleClassName,
  subtitleClassName,
  as: Component = "h2",
  children,
}) => {
  const isDark = theme === "dark";

  const alignmentClasses = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start mr-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl lg:max-w-4xl",
        alignmentClasses,
        className
      )}
    >
      {/* Title */}
      <Component
        className={cn(
          "font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2]",
          isDark ? "text-white" : "text-shuttle-gray-950",
          titleClassName
        )}
      >
        {title}
      </Component>

      {/* Subtitle (optional) */}
      {subtitle && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl lg:max-w-3xl",
            isDark ? "text-white/80" : "text-shuttle-gray-400",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Button (optional) */}
      {buttonText && (
        <div className="mt-6 sm:mt-8">
          {buttonHref ? (
            <Link href={buttonHref}>
              <Button
                variant={buttonVariant}
                size={buttonSize}
                rightIcon={buttonIcon}
                className="font-bold px-6 sm:px-8 shadow-sm hover:shadow-primary/30"
              >
                {buttonText}
              </Button>
            </Link>
          ) : (
            <Button
              variant={buttonVariant}
              size={buttonSize}
              onClick={onButtonClick}
              rightIcon={buttonIcon}
              className="font-bold px-6 sm:px-8 shadow-sm hover:shadow-primary/30"
            >
              {buttonText}
            </Button>
          )}
        </div>
      )}

      {/* Additional slot content */}
      {children}
    </div>
  );
};

export default SectionHeader;
