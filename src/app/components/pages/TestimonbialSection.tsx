"use client";

import React from "react";
import NMContainer from "../ui/Container";
import TestimonialCard, {
  TestimonialCardProps,
} from "../ui/TestimonialCard";

const testimonials: TestimonialCardProps[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/testimonials/sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/testimonials/james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/testimonials/alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const TestimonialSection = () => {
  return (
    <section
      aria-label="Community Testimonials"
      className="relative w-full bg-[url('/Testimonials_Frame.png')] bg-cover bg-center bg-no-repeat overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <NMContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-shuttle-gray-950 leading-[1.18] tracking-tight">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-shuttle-gray-400 leading-relaxed max-w-xl lg:mt-2 mx-auto lg:mx-0">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </NMContainer>
    </section>
  );
};

export default TestimonialSection;