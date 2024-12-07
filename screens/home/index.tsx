import Layout from "@/components/Layout";
import Balance from "@/screens/home/balance";
import Dashboard from "@/screens/home/dashboard";
import {SignMessage} from "@/components/SignMessage";
import Hero from "./hero";
import FeaturedProducts from "./featured-products";

const HomeScreen = () => {
  return (
    <Layout>
        <Balance/>
        <Dashboard/>
        <SignMessage/>
      {/*<Hero />*/}
      {/*<FeaturedProducts />*/}
    </Layout>
  );
};

export default HomeScreen;
