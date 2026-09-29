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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
      "https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=400&q=80",
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
