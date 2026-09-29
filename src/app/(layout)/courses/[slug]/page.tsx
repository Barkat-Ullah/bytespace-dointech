import { notFound } from "next/navigation";
import { getCourseByIdOrSlug, COURSES_MOCK_DATA } from "@/data/mock-data";
import CourseDetailsClient from "./CourseDetailsClient";

export async function generateStaticParams() {
  return COURSES_MOCK_DATA.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseByIdOrSlug(slug);

  if (!course) {
    return {
      title: "Course Details | ByteSpace",
    };
  }

  return {
    title: `${course.title} | ByteSpace Courses`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseByIdOrSlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailsClient course={course} />;
}
