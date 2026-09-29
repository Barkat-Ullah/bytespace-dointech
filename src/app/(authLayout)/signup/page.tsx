"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { showSignUpSuccessAlert } from "@/lib/alerts";

const SignUpPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-warm the home route in Next.js router cache to ensure instant transition
  useEffect(() => {
    router.prefetch("/");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    showSignUpSuccessAlert(() => {
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

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight">
          Sign up and come in
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost.
        </p>

        {/* Feature Graphic */}
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

      {/* Right Column: Register Card */}
      <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-[420px] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl border border-white/20">
          {/* Card Header */}
          <div className="mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-semibold text-secondary block">
              Create an Account
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-shuttle-gray-950 mt-0.5 tracking-tight leading-tight">
              Welcome to<br />ByteSpace
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-shuttle-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jamie Davis"
                className="w-full bg-white border border-shuttle-gray-200 rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Submit Button */}
            <div className="flex justify-end pt-1">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
                className="font-bold text-xs sm:text-sm px-7 py-2 rounded-full shadow-sm hover:shadow-primary/30 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? "Creating..." : "Continue"}
              </Button>
            </div>
          </form>

          {/* Switch Link */}
          <p className="text-xs text-shuttle-gray-400 text-center mt-4 sm:mt-5">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-secondary font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;