export interface CourseReview {
  id: string;
  userName: string;
  userRole?: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessonsCount?: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  isFeatured: boolean;
  image: string;
  rating: number;
  reviewsCount: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  studentsCount: number;
  price: number;
  pricePeriod: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio?: string;
  };
  enrolledAvatars: string[];
  enrolledExtraCount: number;
  sneakPeekImages: string[];
  keyPoints: string[];
  includes: string[];
  modules: CourseModule[];
  reviews: CourseReview[];
  learningProgress?: number;
}

export const COURSE_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];

const sampleKeyPoints = [
  "Foundational Concepts and Terminology",
  "Design Principles Memory and Visual Hierarchy",
  "Advanced Techniques in Modern Production",
  "Project Showcase, Critique and Iteration",
  "Optimizing for Various Platforms and Audiences",
  "Asset Management and Workflow Best Practices",
  "Monetization and Freelance Strategies",
  "Capstone Project: Building Your Portfolio",
];

const sampleIncludes = [
  "Learning Resources and Worksheets",
  "Quality HD Lesson Videos",
  "Certificate of Completion",
  "Private Community Consultation",
];

const defaultReviews: CourseReview[] = [
  {
    id: "rev-1",
    userName: "PurePearl Studio",
    userRole: "UI/UX Designer",
    userAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 year ago",
    comment:
      "This course provided me with a comprehensive understanding of modern creative workflows. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "rev-2",
    userName: "Albert Flores",
    userRole: "Graphic Designer",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 year ago",
    comment:
      "The structure and cadence made learning this topic very natural. Theoretical fundamentals combined with actionable exercises transformed how I deliver projects to clients.",
  },
  {
    id: "rev-3",
    userName: "Cody Fisher",
    userRole: "Product Strategist",
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "8 months ago",
    comment:
      "Outstanding presentation and real-world clarity. The instructor brings industry nuance that isn't available anywhere else online.",
  },
  {
    id: "rev-4",
    userName: "Brooklyn Simmons",
    userRole: "Content Creator",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "6 months ago",
    comment:
      "The step-by-step breakdown was incredible! I managed to build my entire workflow and optimize my delivery speed within two weeks.",
  },
];

const defaultModules: CourseModule[] = [
  {
    id: "mod-1",
    title: "Module 1: Introduction to Fundamentals",
    description:
      "Lay the groundwork with lessons like Understanding Core Concepts and Navigating Modern Tools. Dive into the essentials of craft and technique.",
    duration: "12 mins",
    lessonsCount: 4,
  },
  {
    id: "mod-2",
    title: "Module 2: Design Principles for Impact",
    description:
      "Master key principles that drive impactful outcomes, such as Color Theory, Balance, and Structural Layouts. Elevate your visual intuition.",
    duration: "21 mins",
    lessonsCount: 6,
  },
  {
    id: "mod-3",
    title: "Module 3: Advanced Techniques & Production",
    description:
      "Go beyond the basics with production-ready patterns, efficiency shortcuts, and industry-standard workflows.",
    duration: "16 mins",
    lessonsCount: 5,
  },
  {
    id: "mod-4",
    title: "Module 4: User-Centric Problem Solving",
    description:
      "Understand user needs and translate requirements into high-fidelity deliverables that stand out in the marketplace.",
    duration: "28 mins",
    lessonsCount: 8,
  },
  {
    id: "mod-5",
    title: "Module 5: Interactive Media & Engagement",
    description:
      "Engage your audience with techniques like dynamic pacing, storytelling, and compelling micro-interactions.",
    duration: "34 mins",
    lessonsCount: 6,
  },
  {
    id: "mod-6",
    title: "Module 6: Project Showcase and Critique",
    description:
      "Polish your presentation skills with intensive critique sessions and peer reviews. Showcase your work with confidence.",
    duration: "19 mins",
    lessonsCount: 4,
  },
  {
    id: "mod-7",
    title: "Module 7: Optimizing Across Various Platforms",
    description:
      "Adapt your deliverables for multi-platform distribution and optimize for maximum reach and accessibility.",
    duration: "25 mins",
    lessonsCount: 5,
  },
];

export const COURSES_MOCK_DATA: Course[] = [
  {
    id: "1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Master UI/UX Design, Components, and Responsive Auto Layout",
    description:
      "Embark on an insightful journey into the world of interface design with our comprehensive course, Learn Figma from Basic. This transformative learning experience invites you to delve deep into the art of crafting modern digital experiences. You will understand everything from wireframing to high-fidelity clickable prototypes.",
    category: "UI/UX Design",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 148,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 240,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Product Design Lead",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      bio: "PurePearl Studio is an international digital design team creating intuitive experiences for global tech enterprises.",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 55,
  },
  {
    id: "2",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    description:
      "Unlock the power of digital product creation and commercial digital assets. In this comprehensive guide, we show you step-by-step how to construct icon libraries, design systems, illustrations, and 3D kits that can be monetized worldwide.",
    category: "Digital Illustration",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 172,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 159,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Professional Creator",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      bio: "Dedicated creators helping makers turn ideas into high-converting digital assets.",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 55,
  },
  {
    id: "3",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Harness Large-Scale Data Insights, Machine Learning, and Analytics",
    description:
      "Data is the foundation of competitive modern businesses. Understand distributed databases, data warehousing, pipeline transformations, and actionable dashboard visualizations that guide executive decisions.",
    category: "Data Science",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 96,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 310,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Data Analytics Specialist",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 40,
  },
  {
    id: "4",
    slug: "balancing-productivity-and-work",
    title: "Balancing Productivity an...",
    subtitle: "Optimize Daily Routines, Mental Focus, and Creative Output",
    description:
      "Avoid burnout while achieving peak performance. Learn proven time-blocking, deep work strategies, and modern productivity apps that will 10x your output without sacrificing health and happiness.",
    category: "Productivity",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 88,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 180,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Mindfulness & Performance Coach",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 75,
  },
  {
    id: "5",
    slug: "mastering-money-management",
    title: "Mastering Money Manage...",
    subtitle: "Personal Finance, Budgeting, and Wealth Building Strategies",
    description:
      "Demystify financial independence. Learn how to budget intelligently, invest systematically, diversify passive income streams, and build resilient long-term financial security.",
    category: "Freelance & Entrepreneurship",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 112,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 205,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Certified Financial Advisor",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 30,
  },
  {
    id: "6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Succ...",
    subtitle: "Validate Your Product, Pitch to Investors, and Launch Fast",
    description:
      "Transform early concepts into scalable companies. Discover how to validate market demand, craft investor-ready pitch decks, recruit early adopters, and execute rapid prototype iterations.",
    category: "Freelance & Entrepreneurship",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewsCount: 164,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    studentsCount: 280,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Startup Accelerator Mentor",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 26,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
    learningProgress: 60,
  },
  {
    id: "7",
    slug: "music-production-mastery",
    title: "Music Production Mastery",
    subtitle: "Produce, Mix, and Master Studio-Grade Tracks From Home",
    description:
      "From basic drum programming to advanced synthesizer modulation and vocal compression. Create radio-ready songs using industry-leading digital audio workstations.",
    category: "Music",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 135,
    lessonsCount: 22,
    duration: "4 hours 10 mins",
    commentsCount: 68,
    level: "Intermediate",
    studentsCount: 195,
    price: 35,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Audio Engineer & Producer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 34,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "8",
    slug: "acrylic-painting-and-canvas-techniques",
    title: "Acrylic Painting & Canvas",
    subtitle: "Expressive Brushwork, Color Mixing, and Composition Secrets",
    description:
      "Discover the thrill of mixing rich pigments on canvas. This course takes you through acrylic painting fundamentals, blending methods, glazing, and textural application.",
    category: "Drawing & Painting",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 92,
    lessonsCount: 15,
    duration: "3 hours 20 mins",
    commentsCount: 42,
    level: "Beginner",
    studentsCount: 140,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Fine Artist",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 18,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "9",
    slug: "growth-marketing-strategies",
    title: "Growth Marketing Strategies",
    subtitle: "Scale Customer Acquisition, Funnels, and Performance Ads",
    description:
      "A complete framework for modern marketing leads. Explore multi-channel acquisition, conversion rate optimization, email retention loops, and high-ROI ad campaigns.",
    category: "Marketing",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewsCount: 154,
    lessonsCount: 20,
    duration: "3 hours 45 mins",
    commentsCount: 77,
    level: "Intermediate",
    studentsCount: 285,
    price: 30,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Growth Marketing Director",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 42,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "10",
    slug: "3d-motion-and-character-animation",
    title: "3D Motion & Animation",
    subtitle: "Bring 3D Characters and Dynamic Motion to Life with Blender",
    description:
      "Learn keyframe animation, rigging, physics simulations, and cinematic camera setups. Perfect for aspiring 3D artists, game designers, and motion graphics animators.",
    category: "Animation",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 210,
    lessonsCount: 26,
    duration: "5 hours 15 mins",
    commentsCount: 94,
    level: "Advanced",
    studentsCount: 340,
    price: 39,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Senior 3D Artist",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 50,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "11",
    slug: "social-media-content-creation",
    title: "Social Media Content Creation",
    subtitle: "Grow Your Brand with Viral Video, Reels, and Carousel Systems",
    description:
      "Craft compelling social media feeds that convert followers into customers. Learn algorithm optimization, hook writing, editing for high retention, and brand aesthetics.",
    category: "Social Media",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewsCount: 120,
    lessonsCount: 16,
    duration: "2 hours 40 mins",
    commentsCount: 63,
    level: "Beginner",
    studentsCount: 220,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Social Brand Strategist",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 28,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "12",
    slug: "creative-brand-marketing",
    title: "Creative Brand Marketing",
    subtitle: "Build Unforgettable Brand Stories and Emotional Connections",
    description:
      "A deep dive into brand psychology, identity design, positioning narratives, and memorable campaign launches that captivate cultural imagination.",
    category: "Creative Marketing",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 104,
    lessonsCount: 18,
    duration: "3 hours 10 mins",
    commentsCount: 52,
    level: "Intermediate",
    studentsCount: 165,
    price: 30,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Creative Brand Director",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 19,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "13",
    slug: "cinematic-film-and-video-editing",
    title: "Cinematic Film & Video",
    subtitle: "Color Grading, Pacing, Sound Design, and Premiere Pro",
    description:
      "Transform raw footage into cinematic masterworks. Master non-linear timeline editing, Lumetri color grading, J-cuts, L-cuts, and atmospheric sound design.",
    category: "Film & Video",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 142,
    lessonsCount: 24,
    duration: "4 hours 30 mins",
    commentsCount: 81,
    level: "Intermediate",
    studentsCount: 230,
    price: 35,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Filmmaker & Colorist",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 31,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "14",
    slug: "handcrafted-pottery-and-ceramics",
    title: "Handcrafted Pottery & Ceramics",
    subtitle: "Wheel Throwing, Clay Shaping, Glazing, and Kiln Firing",
    description:
      "Connect with tactile craftsmanship. Master centering clay, pulling cylinders, shaping bowls, trimming, and producing handcrafted functional art.",
    category: "Crafts",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 78,
    lessonsCount: 14,
    duration: "2 hours 50 mins",
    commentsCount: 36,
    level: "Beginner",
    studentsCount: 110,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Ceramicist & Sculptor",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 15,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "15",
    slug: "modern-graphic-design-foundations",
    title: "Modern Graphic Design",
    subtitle: "Typography, Grid Systems, Poster Layouts, and Vector Art",
    description:
      "A comprehensive design journey focusing on layout composition, bespoke typography, color psychology, and vector illustration techniques.",
    category: "Graphic Design",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 165,
    lessonsCount: 19,
    duration: "3 hours 35 mins",
    commentsCount: 70,
    level: "Beginner",
    studentsCount: 290,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Visual Design Lead",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 45,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "16",
    slug: "manual-photography-and-lighting",
    title: "Manual Photography & Light",
    subtitle: "Aperture, Shutter Speed, ISO, and Natural Light Framing",
    description:
      "Unlock full control of your camera. Learn manual exposure triangles, portraiture lighting, street photography framing, and RAW image post-processing in Lightroom.",
    category: "Photography",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 188,
    lessonsCount: 21,
    duration: "4 hours 00 mins",
    commentsCount: 89,
    level: "Beginner",
    studentsCount: 310,
    price: 30,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Commercial Photographer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 52,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "17",
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    subtitle: "React, Next.js, TypeScript, and Serverless Backends",
    description:
      "Learn modern full-stack web development from scratch. Build performant applications with React Server Components, responsive Tailwind CSS styling, and secure database interactions.",
    category: "Web Development",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 240,
    lessonsCount: 30,
    duration: "6 hours 15 mins",
    commentsCount: 110,
    level: "Intermediate",
    studentsCount: 420,
    price: 39,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Senior Software Architect",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 65,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "18",
    slug: "culinary-arts-and-flavor-pairing",
    title: "Culinary Arts & Flavor",
    subtitle: "Knife Skills, Sauces, Searing, and Restaurant Secrets",
    description:
      "Step into the culinary world. Master fundamental knife work, mother sauces, flavor balancing with acids and fats, and plating like a professional Michelin-star chef.",
    category: "Cooking",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewsCount: 84,
    lessonsCount: 16,
    duration: "3 hours 10 mins",
    commentsCount: 45,
    level: "Beginner",
    studentsCount: 135,
    price: 25,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Executive Chef",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 22,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "19",
    slug: "freelancing-and-agency-scaling",
    title: "Freelancing & Agency Scaling",
    subtitle: "Client Invoicing, High-Ticket Proposals, and Contracts",
    description:
      "Transition from an underpaid freelancer to a sought-after independent consultant or boutique agency owner. Learn pricing psychology, contract templates, and client onboarding.",
    category: "Freelance & Entrepreneurship",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 119,
    lessonsCount: 18,
    duration: "3 hours 20 mins",
    commentsCount: 57,
    level: "Intermediate",
    studentsCount: 215,
    price: 30,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "Agency Founder & Strategist",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 30,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
  {
    id: "20",
    slug: "data-science-and-neural-networks",
    title: "Data Science & Neural Nets",
    subtitle: "Python, Pandas, PyTorch, and Deep Learning Architectures",
    description:
      "Unlock artificial intelligence. Code deep neural networks, convolutional vision layers, transformers, and automated data pipelines using Python and modern GPU frameworks.",
    category: "Data Science",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 175,
    lessonsCount: 25,
    duration: "5 hours 30 mins",
    commentsCount: 92,
    level: "Advanced",
    studentsCount: 380,
    price: 45,
    pricePeriod: "/lifetime",
    author: {
      name: "purepearl studio",
      title: "AI Research Engineer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    enrolledAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
    ],
    enrolledExtraCount: 48,
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=400&q=80",
    ],
    keyPoints: sampleKeyPoints,
    includes: sampleIncludes,
    modules: defaultModules,
    reviews: defaultReviews,
  },
];

export const getCourseByIdOrSlug = (idOrSlug: string): Course | undefined => {
  return COURSES_MOCK_DATA.find(
    (c) => c.id === idOrSlug || c.slug === idOrSlug
  );
};

export interface Creator {
  id: string;
  slug: string;
  name: string;
  username: string;
  badge: string;
  role: string;
  category: string;
  avatar: string;
  bio: string[];
  shortBio?: string;
  productsCount: number;
  followersCount: number;
  rating: number;
  studentsCount?: number;
}

export const CREATOR_CATEGORIES = [
  "All",
  "UI/UX Design",
  "Web Development",
  "Digital Illustration",
  "AI & Data Science",
  "Marketing & Growth",
  "Photography & Video",
  "Motion & 3D",
  "Productivity & Business",
] as const;

export type CreatorCategory = (typeof CREATOR_CATEGORIES)[number];

export const CREATORS_MOCK_DATA: Creator[] = [
  {
    id: "creator-1",
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    username: "@purepearl",
    badge: "Pro Creator",
    role: "Passionate UI/UX & Web Designer",
    category: "UI/UX Design",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    shortBio: "Crafting modern user experiences, design systems, and web interfaces.",
    productsCount: 8,
    followersCount: 14200,
    rating: 4.9,
    studentsCount: 3820,
  },
  {
    id: "creator-2",
    slug: "marcus-chen",
    name: "Marcus Chen",
    username: "@marcusdev",
    badge: "Top Mentor",
    role: "Full-Stack Engineer & Next.js Architect",
    category: "Web Development",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Hey! I'm Marcus Chen, a full-stack engineer passionate about teaching modern web development using React, Next.js, and TypeScript.",
      "Over the last decade, I have trained thousands of developers worldwide to build scalable and performant cloud web applications.",
    ],
    shortBio: "Mastering full-stack web applications with React, Next.js, and TypeScript.",
    productsCount: 12,
    followersCount: 28400,
    rating: 4.9,
    studentsCount: 6500,
  },
  {
    id: "creator-3",
    slug: "sophia-al-mansoor",
    name: "Sophia Al-Mansoor",
    username: "@sophiadesign",
    badge: "Elite Creator",
    role: "Design Lead & Figma Specialist",
    category: "UI/UX Design",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Lead designer helping students understand the psychology of visual interfaces and master Figma from beginner to enterprise workflows.",
    ],
    shortBio: "Transforming ideas into polished, accessible product design systems in Figma.",
    productsCount: 6,
    followersCount: 19800,
    rating: 4.8,
    studentsCount: 4200,
  },
  {
    id: "creator-4",
    slug: "david-kim",
    name: "David Kim",
    username: "@daviddata",
    badge: "AI Specialist",
    role: "Senior AI Researcher & Data Scientist",
    category: "AI & Data Science",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Researcher at the forefront of generative AI, neural networks, and Python data pipelines for real-world enterprise applications.",
    ],
    shortBio: "Deep learning, predictive models, and practical Generative AI with Python.",
    productsCount: 9,
    followersCount: 22100,
    rating: 5.0,
    studentsCount: 5100,
  },
  {
    id: "creator-5",
    slug: "maya-lin",
    name: "Maya Lin",
    username: "@mayadraws",
    badge: "Artist",
    role: "Concept Artist & Digital Illustrator",
    category: "Digital Illustration",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Illustrator who has worked with leading games and media studios. Teaching digital character design, lighting, and concept art.",
    ],
    shortBio: "Digital illustration, character concept art, and vibrant brush techniques in Procreate.",
    productsCount: 7,
    followersCount: 31200,
    rating: 4.9,
    studentsCount: 7800,
  },
  {
    id: "creator-6",
    slug: "lucas-silva",
    name: "Lucas Silva",
    username: "@lucas3d",
    badge: "3D Maestro",
    role: "Blender & 3D Motion Specialist",
    category: "Motion & 3D",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Crafting hyper-realistic 3D scenes and motion graphics in Blender. Empowering 3D artists to monetize commercial animation.",
    ],
    shortBio: "Bringing ideas to life with Blender, 3D modeling, lighting, and cinematic motion graphics.",
    productsCount: 5,
    followersCount: 16500,
    rating: 4.8,
    studentsCount: 3400,
  },
  {
    id: "creator-7",
    slug: "amara-okafor",
    name: "Amara Okafor",
    username: "@amarafound",
    badge: "Strategist",
    role: "Startup Founder & Product Strategist",
    category: "Productivity & Business",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Serial founder teaching customer discovery, digital monetization, and building lean MVPs from zero to product-market fit.",
    ],
    shortBio: "Proven frameworks to launch startups, validate ideas, and accelerate revenue.",
    productsCount: 4,
    followersCount: 18900,
    rating: 4.9,
    studentsCount: 4600,
  },
  {
    id: "creator-8",
    slug: "alexander-wright",
    name: "Alexander Wright",
    username: "@alexwright",
    badge: "Architect",
    role: "Cloud Architect & Distributed Systems",
    category: "Web Development",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Principal cloud architect guiding developers through microservices, serverless infrastructure, and high-concurrency systems.",
    ],
    shortBio: "Scalable cloud architectures, Docker, Kubernetes, and serverless best practices.",
    productsCount: 10,
    followersCount: 24700,
    rating: 4.8,
    studentsCount: 5900,
  },
  {
    id: "creator-9",
    slug: "nathaniel-brooks",
    name: "Nathaniel Brooks",
    username: "@nategrowth",
    badge: "Growth Lead",
    role: "Digital Marketing & Brand Growth",
    category: "Marketing & Growth",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Former growth director at top fintech startups, breaking down paid ads, organic SEO pipelines, and conversion rate optimization.",
    ],
    shortBio: "Data-driven marketing, user acquisition funnels, and organic brand acceleration.",
    productsCount: 8,
    followersCount: 27300,
    rating: 4.9,
    studentsCount: 6200,
  },
  {
    id: "creator-10",
    slug: "clara-morales",
    name: "Clara Morales",
    username: "@claramorales",
    badge: "Photographer",
    role: "Commercial Photographer & Colorist",
    category: "Photography & Video",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Published photographer sharing secrets of natural lighting, street portraits, and professional Lightroom / Photoshop color grading.",
    ],
    shortBio: "Capturing visual emotion with professional lighting, composition, and color grading.",
    productsCount: 6,
    followersCount: 21500,
    rating: 4.9,
    studentsCount: 4800,
  },
  {
    id: "creator-11",
    slug: "julian-dupont",
    name: "Julian Dupont",
    username: "@juliandupont",
    badge: "Design Lead",
    role: "Interaction Designer & Micro-Animations",
    category: "UI/UX Design",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Obsessed with smooth micro-interactions, spring physics, and Framer prototypes that wow users and stakeholders.",
    ],
    shortBio: "Delightful web interactions, interactive prototypes, and motion design in Framer.",
    productsCount: 7,
    followersCount: 15800,
    rating: 4.8,
    studentsCount: 3900,
  },
  {
    id: "creator-12",
    slug: "dr-evelyn-reed",
    name: "Dr. Evelyn Reed",
    username: "@evelynai",
    badge: "AI Scholar",
    role: "AI Ethics & Machine Learning Professor",
    category: "AI & Data Science",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Demystifying statistical learning, LLM fine-tuning, and responsible AI system architecture for tech professionals.",
    ],
    shortBio: "Rigorous yet intuitive explanations of machine learning algorithms and LLMs.",
    productsCount: 5,
    followersCount: 34100,
    rating: 5.0,
    studentsCount: 8900,
  },
  {
    id: "creator-13",
    slug: "liam-gallagher",
    name: "Liam Gallagher",
    username: "@liamsound",
    badge: "Producer",
    role: "Audio Engineer & Sound Designer",
    category: "Photography & Video",
    avatar:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Award-winning sound designer sharing techniques for podcast mixing, film score basics, and crisp vocal production.",
    ],
    shortBio: "Professional sound design, mixing, and audio production for creators and podcasters.",
    productsCount: 4,
    followersCount: 11200,
    rating: 4.7,
    studentsCount: 2600,
  },
  {
    id: "creator-14",
    slug: "chloe-zhang",
    name: "Chloe Zhang",
    username: "@chloezhang",
    badge: "Brand Stylist",
    role: "Brand Identity & Logo Crafting",
    category: "Digital Illustration",
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Guiding designers through creative logo exploration, geometric grids, and crafting cohesive visual identity guidelines.",
    ],
    shortBio: "Timeless logo design, visual identities, and brand guidelines for modern companies.",
    productsCount: 6,
    followersCount: 23400,
    rating: 4.9,
    studentsCount: 5300,
  },
  {
    id: "creator-15",
    slug: "tariq-hassan",
    name: "Tariq Hassan",
    username: "@tariqcloud",
    badge: "DevOps Pro",
    role: "DevOps Engineer & SRE Specialist",
    category: "Web Development",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Streamlining deployment pipelines with GitHub Actions, Terraform, and cloud infrastructure automation.",
    ],
    shortBio: "Mastering modern CI/CD pipelines, container orchestration, and cloud reliability.",
    productsCount: 8,
    followersCount: 17600,
    rating: 4.8,
    studentsCount: 4100,
  },
  {
    id: "creator-16",
    slug: "zoe-martinez",
    name: "Zoe Martinez",
    username: "@zoemobile",
    badge: "Mobile Guru",
    role: "Mobile App Architect & Flutter Specialist",
    category: "Web Development",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Building silky smooth cross-platform applications with Flutter and React Native for iOS and Android.",
    ],
    shortBio: "Crafting beautiful, reactive mobile apps with Flutter, Dart, and state management.",
    productsCount: 7,
    followersCount: 20400,
    rating: 4.9,
    studentsCount: 4900,
  },
  {
    id: "creator-17",
    slug: "isabella-rossi",
    name: "Isabella Rossi",
    username: "@isabellarossi",
    badge: "Typography Lead",
    role: "Editorial Designer & Typographer",
    category: "UI/UX Design",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Teaching the nuances of typeface pairing, modular scales, and creating stunning editorial magazine layouts.",
    ],
    shortBio: "Mastering typography, layout hierarchies, and editorial design for digital & print.",
    productsCount: 5,
    followersCount: 13900,
    rating: 4.8,
    studentsCount: 3100,
  },
  {
    id: "creator-18",
    slug: "vikram-patel",
    name: "Vikram Patel",
    username: "@vikramfin",
    badge: "FinTech Pro",
    role: "FinTech Analyst & Crypto Researcher",
    category: "Productivity & Business",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Navigating blockchain primitives, decentralised finance economics, and financial modeling for digital creators.",
    ],
    shortBio: "Decentralized finance, digital assets, and smart financial management for creators.",
    productsCount: 6,
    followersCount: 26800,
    rating: 4.8,
    studentsCount: 5700,
  },
  {
    id: "creator-19",
    slug: "ethan-howard",
    name: "Ethan Howard",
    username: "@ethancyber",
    badge: "Security Lead",
    role: "Cybersecurity Analyst & Ethical Hacker",
    category: "Web Development",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Securing web applications, penetration testing modern APIs, and defending systems against OWASP Top 10 exploits.",
    ],
    shortBio: "Web application security, API vulnerability testing, and ethical hacking essentials.",
    productsCount: 9,
    followersCount: 29500,
    rating: 4.9,
    studentsCount: 7100,
  },
  {
    id: "creator-20",
    slug: "hannah-schmidt",
    name: "Hannah Schmidt",
    username: "@hannahcreator",
    badge: "Content Strategist",
    role: "YouTube Producer & Audience Growth",
    category: "Marketing & Growth",
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    bio: [
      "Helping creative professionals script, produce, and scale impactful video content and personal brands.",
    ],
    shortBio: "Video storytelling, YouTube algorithms, and building a loyal engaged community.",
    productsCount: 8,
    followersCount: 38200,
    rating: 5.0,
    studentsCount: 9400,
  },
];

export const getCreatorBySlug = (slug: string): Creator => {
  return (
    CREATORS_MOCK_DATA.find((c) => c.slug === slug) ||
    CREATORS_MOCK_DATA[0]
  );
};


