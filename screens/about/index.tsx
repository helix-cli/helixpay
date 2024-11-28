import Layout from "@/components/Layout";
import Hero from "./hero";
import Text from "./text";
import Video from "./video";
import Awards from "./awards";
import Values from "./values";
import CTA from "./cta";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Text />
      <Video />
      <Awards />
      <Values />
      <CTA />
    </Layout>
  );
};

export default About;
