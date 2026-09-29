"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { showSignInSuccessAlert } from "@/lib/alerts";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    router.prefetch("/");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    showSignInSuccessAlert(() => {
      router.push("/");
    });
  };

  return (
    <div className="w-full max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
      <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ByteSpace Home"
          className="inline-flex items-center group mb-3 sm:mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-transform duration-200 hover:scale-105"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
            <Image
              src="/Vector.png"
              alt="ByteSpace"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain select-none"
            />
          </div>
        </Link>
      
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight">
          Sign in with ease
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
          Experience a seamless and efficient sign-in process that grants you
          instant access to a world of knowledge.
        </p>

        <div className="relative mt-4 sm:mt-5 lg:mt-6 w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
          <Image
            src="/sign-up-in.png"
            alt="ByteSpace Learning and Creation Features"
            width={550}
            height={580}
            priority
            className="w-full h-auto object-contain select-none drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-[420px] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl border border-white/20">
          {/* Card Header */}
          <div className="mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-semibold text-secondary block">
              Sign In
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-shuttle-gray-950 mt-0.5 tracking-tight">
              Welcome Back
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-shuttle-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="designer@example.com"
                className="w-full bg-white border border-shuttle-gray-200 rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-shuttle-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-shuttle-gray-200 rounded-xl px-3.5 py-2 sm:py-2.5 pr-10 text-xs sm:text-sm text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-shuttle-gray-400 hover:text-shuttle-gray-700 transition-colors p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
                className="font-bold text-xs sm:text-sm px-7 py-2 rounded-full shadow-sm hover:shadow-primary/30 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </form>

          <div className="relative my-4 sm:my-5 flex items-center justify-center">
            <div className="border-t border-shuttle-gray-200/80 w-full" />
            <span className="bg-white px-3 text-[11px] text-shuttle-gray-400 absolute">
              or
            </span>
          </div>

          <div className="flex items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => showSignInSuccessAlert(() => router.push("/"))}
              aria-label="Sign in with Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-shuttle-gray-200 flex items-center justify-center hover:bg-shuttle-gray-50 hover:border-shuttle-gray-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
            >
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1877F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => showSignInSuccessAlert(() => router.push("/"))}
              aria-label="Sign in with Google"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-shuttle-gray-200 flex items-center justify-center hover:bg-shuttle-gray-50 hover:border-shuttle-gray-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </button>
          </div>
          
          <p className="text-xs text-shuttle-gray-400 text-center mt-4 sm:mt-5">
            New user?{" "}
            <Link
              href="/signup"
              className="text-secondary font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;