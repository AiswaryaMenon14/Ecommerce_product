import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Products from "../Products/Index";

function CategoryProducts() {
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  const decodedName = decodeURIComponent(name);
  if (!products || products.length === 0) {
    return <div className="text-center py-10 text-xl">Loading products...</div>;
  }

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === decodedName.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-10 text-xl text-red-500">
        No products found for this category.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold my-4 capitalize">
        {name}
      </h2>
      <Products products={filteredProducts} />
    </div>
  );
}

export default CategoryProducts;
