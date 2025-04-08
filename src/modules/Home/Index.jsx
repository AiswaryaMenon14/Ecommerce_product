import React, { useContext } from "react";
import Hero from "../../components/Hero/Index";
import Products from "../../components/Products/Index";
import FeatureCard from "../../components/FeatureCard/Index";
import { ProductContext } from "../../context/ProductContext";
import Categories from "../../components/Categories/Index";

function Home() {
  const { products, loading } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-6xl text-indigo-900 tracking-widest font-bold title-font mb-5">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {loading ? <div>Loading....</div> : <Products products={products} />}

      <Categories />
    </div>
  );
}

export default Home;
