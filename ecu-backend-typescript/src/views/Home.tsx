import React, {useEffect } from "react";
import {ProductContextType, useProductContext } from "../contexts/ProductContext";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import Pamelas from "../sections/Pamelas";
import ProductGrid from "../sections/ProductGrid";
import Showcase from "../sections/Showcase";
import TwoForTwentynine from "../sections/TwoForTwentynine";
import TwoForFortynine from "../sections/TwoForFortynine";
import Services from "../sections/Services";

const Home: React.FC = () => {

  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
  }, [getFeaturedProducts])
  

  return (
    <>
      {/* Lösning av Elvin Javadov */}
      <div className="gradient-background">
        <Navbar></Navbar>
      </div>
      <Showcase></Showcase>
      <ProductGrid
        title="Featured Products"
        items={featuredProducts}
      ></ProductGrid>
      <Pamelas></Pamelas>
      <TwoForTwentynine></TwoForTwentynine>
      <TwoForFortynine></TwoForFortynine>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default Home;
