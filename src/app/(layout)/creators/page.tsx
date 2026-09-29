import { getCreatorBySlug } from "@/data/mock-data";
import CreatorProfileClient from "@/app/components/pages/creator/CreatorProfileClient";

export const metadata = {
  title: "Creators | ByteSpace",
  description: "Explore creators and instructors on ByteSpace.",
};

export default function CreatorsDefaultPage() {
  const creator = getCreatorBySlug("purepearl-studio");
  return <CreatorProfileClient creator={creator} />;
}
