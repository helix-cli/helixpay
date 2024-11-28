import Layout from "@/components/Layout";
import Gift from "../universal/gift";
import HelixPay from "../universal/helixpay";
import Hero from "../universal/hero";
import Products from "../universal/products";

type CategoryProps = {
  category?: {
    id: number;
    slug: string;
    name: string;
    description: string;
  };
};

const Category = ({ category }: CategoryProps) => {
  return (
    <Layout>
      <Hero category={category} />
      <Products category={category} />
      <Gift />
      <HelixPay />
    </Layout>
  );
};

export default Category;
