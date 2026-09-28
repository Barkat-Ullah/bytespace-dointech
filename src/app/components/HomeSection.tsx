'use client';

import HeroSection from "./pages/HeroSection";
import Sponsor from "./pages/Sponser";
import Category from "./pages/Category";
import Stats from "./pages/Stats";

const HomeSection = () => {
    return (
        <>
            <HeroSection />
            <Sponsor />
            <Category />
            <Stats/>
        </>
    );
};

export default HomeSection;