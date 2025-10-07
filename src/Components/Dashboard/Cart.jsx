import React, { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import { HandleRemoveFromCartContext, TotalPriceContext } from "../../Root";

const Cart = ({ cart }) => {
  const handleRemoveFromCart = useContext(HandleRemoveFromCartContext);
  return (
    <div className="bg-white max-w-[1280px] mx-auto lg:flex items-start justify-between p-8  rounded-[16px] mb-6">
      <div className="bg-gray-100 p-3 rounded-[16px]">
        <img
          className="w-[200px] lg:h-[124px] mx-auto"
          src={cart.product_image}
          alt=""
        />
      </div>
      <div className="max-w-[656px] ">
        <h3 className="font-semibold text-[24px] mb-[18px] text-center lg:text-left my-4 lg:my-0">
          {cart.product_title}
        </h3>
        <p className="text-gray-500 mb-4">{cart.description}</p>
        <p className="text-[20px] font-semibold">Price : ${cart.price}</p>
      </div>
      <div>
        <ImCancelCircle
          onClick={() => handleRemoveFromCart(cart)}
          size={24}
          className="text-red-500 hidden lg:block cursor-pointer"
        />
        <button
          onClick={() => handleRemoveFromCart(cart)}
          className="btn bg-red-600 mt-4 text-white rounded-[32px] lg:hidden"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
