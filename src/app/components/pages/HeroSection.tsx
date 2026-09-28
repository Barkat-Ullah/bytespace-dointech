"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
        }
    };

    return (
        <section className="relative w-full bg-secondary bg-[url('/common-bg.png')] bg-top bg-cover bg-no-repeat overflow-hidden">

            <div className="relative w-full max-w-[1920px] mx-auto min-h-[480px] sm:min-h-0 aspect-[2880/2048]">
                {/* Background Frame Graphic */}
                <Image
                    src="/Hero_Frame.png"
                    alt="ByteSpace Hero Graphic"
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain object-bottom sm:object-top select-none pointer-events-none"
                />

                {/* Foreground Content: Title, Description, and Search Bar */}
                <div className="absolute inset-x-0 top-0 z-10 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-14 px-4 sm:px-6">
                    <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">

                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-sm">
                            Get Access to Hundreds
                            <br />
                            Courses Available
                        </h1>


                        <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white/85 max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed">
                            Unlock your creativity, gain valuable knowledge, and grow your
                            business with our wide range of courses.
                        </p>

                        <form
                            onSubmit={handleSearch}
                            className="mt-3 sm:mt-5 md:mt-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center gap-2 sm:gap-3"
                        >
                            <div className="relative flex items-center w-full bg-white rounded-full px-4 sm:px-5 py-2 sm:py-3 shadow-lg shadow-black/15 focus-within:ring-2 focus-within:ring-primary transition-all">
                                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-shuttle-gray-400 shrink-0 mr-2 sm:mr-3" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Course, topic, creator"
                                    className="w-full bg-transparent text-xs sm:text-sm md:text-base text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="md"
                                className="h-9 sm:h-11 md:h-12 px-5 sm:px-7 font-bold text-xs sm:text-sm md:text-base shrink-0 shadow-md hover:shadow-primary/30"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;