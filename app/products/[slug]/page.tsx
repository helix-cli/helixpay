import { categories } from "@/lib/mock";
import Category from "@/screens/category";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const category = categories.find((category) => category.slug === slug);

  return <Category category={category} />;
};

export default Page;
