import React from "react";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, addToCart, removeOne, deleteItem } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-8">
            {cart.map((product, index) => (
              <li key={index}>
                <section className="text-gray-600 body-font overflow-hidden border rounded-lg shadow">
                  <div className="container px-5 py-6 mx-auto">
                    <div className="lg:w-full mx-auto flex flex-wrap">
                      <img
                        alt={product.title}
                        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={product.image}
                      />
                      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">
                          {product.category}
                        </h2>
                        <h1 className="text-gray-900 text-2xl title-font font-medium mb-2">
                          {product.title}
                        </h1>
                        <p className="leading-relaxed mb-4">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <span className="title-font font-medium text-xl text-gray-900">
                            ₹{product.price} x {product.quantity}
                          </span>
                          <button
                            onClick={() => {
                              deleteItem(product.id);
                              toast.error(
                                `${product.title} removed from cart`,
                                {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: false,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "light",
                                }
                              );
                            }}
                            className="ml-4 text-red-500 hover:text-red-600 text-sm border px-3 py-1 rounded cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>

                        <div className="flex items-center mt-4">
                          <button
                            onClick={() => {
                              removeOne(product.id);
                            }}
                            className="px-3 py-1 bg-gray-200 text-lg cursor-pointer"
                          >
                            −
                          </button>
                          <span className="px-4">{product.quantity}</span>
                          <button
                            onClick={() => addToCart(product)}
                            className="px-3 py-1 bg-gray-200 text-lg cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-right border-t pt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
