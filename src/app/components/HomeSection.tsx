'use client';

import HeroSection from "./pages/HeroSection";
import Sponsor from "./pages/Sponser";
import Category from "./pages/Category";
import Stats from "./pages/Stats";
import CTAsection from "./pages/CTAsection";
import TestimonialSection from "./pages/TestimonbialSection";

const HomeSection = () => {
    return (
        <>
            <HeroSection />
            <Sponsor />
            <Category />
            <Stats/>
            <CTAsection/>
            <TestimonialSection/>
        </>
    );
};

export default HomeSection;