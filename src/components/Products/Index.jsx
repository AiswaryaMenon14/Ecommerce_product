import React from "react";
import { Link } from "react-router-dom";

function Products({ products = [] }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((product) => {
              const { id } = product;
              return (
                <Link
                  to={`/product/${id}`}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border m-1 border-opacity-50 shadow-md cursor-pointer"
                  key={id}
                >
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={product.image}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">Rs:{product.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
