import Layout from "@/components/Layout";
import Hero from "./hero";
import Video from "./video";
import Features from "./features";
import Benefits from "./benefits";
import Faq from "./faq";

type ProductProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    images: string[];
    category_id: number;
  };
};

const Product = ({ product }: ProductProps) => {
  return (
    <Layout>
      <Hero product={product} />
      <Video />
      <Features />
      <Benefits />
      <Faq />
    </Layout>
  );
};

export default Product;
