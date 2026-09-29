import { getCreatorBySlug, CREATORS_MOCK_DATA } from "@/data/mock-data";
import CreatorProfileClient from "@/app/components/pages/creator/CreatorProfileClient";

export async function generateStaticParams() {
  return CREATORS_MOCK_DATA.map((creator) => ({
    slug: creator.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  return {
    title: `${creator.name} - Creator Profile | ByteSpace`,
    description: creator.role,
  };
}

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  return <CreatorProfileClient creator={creator} />;
}
