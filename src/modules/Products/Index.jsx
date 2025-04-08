import React, { useContext } from "react";
import Products from "../../components/Products/Index";
import Categories from "../../components/Categories/Index";
import { ProductContext } from "../../context/ProductContext";

function ProductsPage() {
  const { products, loading } = useContext(ProductContext);

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-6xl text-indigo-900 tracking-widest font-bold title-font mb-5">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All Products
        </h1>
      </div>
      {loading ? <div>Loading....</div> : <Products products={products} />}
    </div>
  );
}

export default ProductsPage;
