import React, { useContext } from "react";
import { AddToCartContext, TotalPriceContext } from "../../Root";
import sortIcon from "../../assets/frame.png";
import Cart from "./Cart";
const Carts = () => {
  const totalPrice = useContext(TotalPriceContext);
  const addToCart = useContext(AddToCartContext);
  return (
    <div>
      {" "}
      {addToCart.length > 0 ? (
        <div className="bg-gray-100 mb-5 pb-5">
          <div className="mb-15 pt-15 max-w-[1200px] items-center mx-auto lg:flex justify-between">
            <h3 className="text-[24px] font-bold text-center ">Cart</h3>
            <div className="lg:flex mb-3 gap-4 items-center">
              <h3 className=" text-center lg:text-[24px] lg:font-bold mb-4 lg:mb-0">
                Total Cost : ${totalPrice}
              </h3>
              <div className="flex justify-center">
                <button className=" text-center btn text-[#8332C5] mb-3 lg:mb-0 border border-[#8332C5] bg-white rounded-[32px]">
                  Sort By Price <img src={sortIcon} alt="" />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className=" text-center btn  rounded-[32px] bg-gradient-to-b from-[#0B0B0B00] to-[#0B0B0B26] text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #952fde 0%, #9135e2 25%, #a544e9 65%, #dc63e9 100%)",
                  }}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          {addToCart.map((cart) => (
            <Cart cart={cart} key={cart.product_id} />
          ))}
        </div>
      ) : (
        <h3 className="text-center bg-gray-100 flex items-center justify-center text-3xl lg:text-5xl font-bold min-h-[300px]">
          Your Cart Is Empty !!!
        </h3>
      )}
    </div>
  );
};

export default Carts;
