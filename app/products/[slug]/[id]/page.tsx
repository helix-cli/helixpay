import { categories, products } from "@/lib/mock";
import Product from "@/screens/product";

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string; id: number | string }>;
}) => {
  const { slug, id } = await params;

  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  const product = products.find(
    (product) =>
      product.id.toString() === id && product.category_id === category.id,
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log("Product:", product);

  return <Product product={product} />;
};

export default Page;
