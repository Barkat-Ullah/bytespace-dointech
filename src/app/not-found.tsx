import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import Button from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-primary selection:text-secondary">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="w-full flex-1 bg-secondary bg-[url('/common-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-6 md:py-12 lg:py-16 xl:py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <span
            aria-hidden="true"
            className="text-[130px] sm:text-[190px] md:text-[250px] lg:text-[310px] xl:text-[350px] font-black tracking-tight leading-none bg-gradient-to-b from-[#d4fb20] via-[#a8ee26]/70 to-[#d4fb20]/15 bg-clip-text text-transparent select-none drop-shadow-sm"
          >
            404
          </span>
          <div className="-mt-3 sm:-mt-5 md:-mt-7 lg:-mt-10 xl:-mt-12 relative z-10 flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-bold sm:font-extrabold text-white tracking-tight leading-tight sm:leading-[1.18]">
              The page you are looking
              <br className="hidden sm:inline" /> for doesn’t exist
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base text-white/80 max-w-md sm:max-w-lg mx-auto font-normal leading-relaxed">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="mt-6 sm:mt-8">
              <Link href="/">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-full font-bold px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm shadow-md hover:shadow-primary/30 tracking-wide"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
