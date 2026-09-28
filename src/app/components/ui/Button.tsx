import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "outline-white"
    | "ghost"
    | "ghost-white"
    | "white"
    | "dark";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Electric Lime (#d4fb20) background with Persian Blue text (#003be2) or dark text as in Figma
  primary:
    "bg-primary text-secondary hover:bg-[#cbf51b] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-primary",
  // Persian Blue (#003be2) background with white text
  secondary:
    "bg-secondary text-white hover:bg-[#0031b8] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-secondary",
  // Clean outline for light backgrounds
  outline:
    "border border-shuttle-gray-300 text-shuttle-gray-950 hover:bg-shuttle-gray-50 active:scale-[0.98] focus-visible:ring-secondary",
  // Outline for dark/blue backgrounds (like hero / navbar)
  "outline-white":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98] focus-visible:ring-white",
  // Ghost button
  ghost:
    "text-shuttle-gray-950 hover:bg-shuttle-gray-50 active:scale-[0.98] focus-visible:ring-secondary",
  // Ghost button for blue/dark backgrounds
  "ghost-white":
    "text-white hover:bg-white/10 active:scale-[0.98] focus-visible:ring-white",
  // White pill button
  white:
    "bg-white text-secondary hover:bg-white/95 active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-white",
  // Dark button
  dark:
    "bg-shuttle-gray-950 text-white hover:bg-black active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-shuttle-gray-950",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-4 text-xs font-semibold gap-1.5",
  md: "h-10 px-5 text-sm font-semibold gap-2",
  lg: "h-12 px-7 text-base font-semibold gap-2.5",
  icon: "h-10 w-10 p-0 flex items-center justify-center shrink-0",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:outline-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {leftIcon}
          </span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
