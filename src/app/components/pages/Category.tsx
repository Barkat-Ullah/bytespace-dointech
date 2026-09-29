"use client";

import Image from "next/image";
import Link from "next/link";
import NMContainer from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

import designIcon from "@/asset/category/design.png";
import developmentIcon from "@/asset/category/development.png";
import itIcon from "@/asset/category/it.png";
import businessIcon from "@/asset/category/business.png";
import marketingIcon from "@/asset/category/marketing.png";
import photographyIcon from "@/asset/category/photography.png";

const categories = [
  {
    id: "design",
    name: "Design",
    icon: designIcon,
    href: "/courses?category=design",
  },
  {
    id: "development",
    name: "Development",
    icon: developmentIcon,
    href: "/courses?category=development",
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: itIcon,
    href: "/courses?category=it-software",
  },
  {
    id: "business",
    name: "Business",
    icon: businessIcon,
    href: "/courses?category=business",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: marketingIcon,
    href: "/courses?category=marketing",
  },
  {
    id: "photography",
    name: "Photography",
    icon: photographyIcon,
    href: "/courses?category=photography",
  },
];

const Category = () => {
  return (
    <section
      aria-label="Course Categories"
      className="w-full bg-white py-10 md:py-14 lg:py-16"
    >
      <NMContainer>
        {/* Reusable Section Header */}
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          align="center"
          theme="light"
        />

        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col items-center justify-center p-5 sm:p-6 md:p-7 bg-white rounded-2xl sm:rounded-3xl border border-shuttle-gray-200/80 shadow-sm hover:shadow-md hover:border-primary/80 hover:-translate-y-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={cat.icon}
                  alt={`${cat.name} icon`}
                  width={60}
                  height={60}
                  className="w-full h-full object-contain select-none"
                />
              </div>

              <span className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-shuttle-gray-950 group-hover:text-primary transition-colors duration-200 text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </NMContainer>
    </section>
  );
};

export default Category;