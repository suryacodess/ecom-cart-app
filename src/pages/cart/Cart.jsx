import React, { useEffect } from "react";
import cart from "../../context/CartContext";
import { useContext } from "react";
import CartItems from "../../component/schimmer/CartItems";

export default function Cart() {
  let [cartProducts, setCartProducts] = useContext(cart);
  let cartItems = cartProducts.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (id) => {
    let filterItem = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(filterItem);
  };

  return (
    <>
      {cartItems === 0 ? (
        <CartItems />
      ) : (
        <main className="w-full pt-[120px] pb-10 px-5">
          <div className="max-w-[1200px] mx-auto">
            {cartProducts.map((product) => {
              return (
                <div
                  key={product?.id}
                  style={{ border: "1px solid #000" }}
                  className="w-[100%]  sm:flex overflow-hidden relative mb-10  justify-center items-center  bg-slate-50 rounded-xl "
                >
                  <p className="text-xs absolute top-0 left-0 h-7 w-7 p-2 bg-black text-white flex justify-center items-center ">
                    {product?.rating?.rate}
                  </p>

                  <div className="w-full md:w-1/2 h-[200px] flex justify-center items-center">
                    <img
                      className="w-32 mix-blend-multiply object-contain "
                      src={product?.image}
                      alt={product?.title}
                    />
                  </div>
                  <div className="w-[100%] min-h-[200px] bg-black text-white flex flex-col justify-between items-start p-2 py-4">
                    <h1 className="font-bold text-base">
                      {product?.title?.slice(0, 20)}
                    </h1>
                    <p className="text-sm font-[300] py-2">
                      {product.description.length > 350
                        ? product?.description?.slice(0, 300) + "..."
                        : product.description}
                    </p>
                    <p className="text-sm font-[900]">${product?.price}</p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-white  px-2 mt-2 text-black text-xs py-2 rounded-md"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
}
