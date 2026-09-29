"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Button from "../ui/Button";
import NMContainer from "../ui/Container";

const HeroSection = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = searchQuery.trim();
        if (trimmed) {
            router.push(`/courses?search=${encodeURIComponent(trimmed)}`);
        } else {
            router.push("/courses");
        }
    };

    return (
        <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-top bg-cover bg-no-repeat overflow-hidden">
            <div className="relative w-full h-[560px] md:h-[680px] lg:h-[740px] xl:h-[840px] 2xl:h-[58.333vw]">
                {/* Background Frame Graphic - spans full width with proportional scaling */}
                <div className="absolute inset-0 w-full pointer-events-none select-none">
                    <Image
                        src="/Hero_Frame.png"
                        alt="ByteSpace Hero Graphic"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-bottom"
                    />
                </div>

                <div className="absolute inset-x-0 top-0 z-10 pt-4 sm:pt-6 md:pt-7 lg:pt-12">
                    <NMContainer>
                        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
                            <h1 className="text-2xl md:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm ">
                                Get Access to Hundreds
                                <br />
                                Courses Available
                            </h1>

                            <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-white/85 max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed">
                                Unlock your creativity, gain valuable knowledge, and grow your
                                business with our wide range of courses.
                            </p>

                            <form
                                onSubmit={handleSearch}
                                className="mt-3.5 md:mt-5 2xl:mt-7 w-full max-w-xs md:max-w-lg lg:max-w-xl 2xl:max-w-2xl flex items-center justify-center gap-2 sm:gap-3 2xl:gap-4"
                            >
                                <div className="relative flex items-center w-full bg-white rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 md:py-3 2xl:px-6 2xl:py-3.5 shadow-lg shadow-black/15 focus-within:ring-2 focus-within:ring-primary transition-all">
                                    <Search className="w-4 h-4 2xl:w-6 2xl:h-6 text-shuttle-gray-400 shrink-0 mr-2 sm:mr-3 2xl:mr-4" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Course, topic, creator"
                                        className="w-full bg-transparent text-xs sm:text-sm md:text-base 2xl:text-lg text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="md"
                                    className="h-9 sm:h-10 md:h-11 2xl:h-12 px-4 sm:px-7 2xl:px-8 font-bold text-xs sm:text-sm md:text-base 2xl:text-lg shrink-0 shadow-md hover:shadow-primary/30 cursor-pointer"
                                >
                                    Search
                                </Button>
                            </form>
                        </div>
                    </NMContainer>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;