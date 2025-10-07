import React, { useContext, useState } from "react";
import successImg from "../../assets/success.png";
import {
  AddToCartContext,
  SetAddToCartContext,
  TotalPriceContext,
} from "../../Root";
import sortIcon from "../../assets/frame.png";
import Cart from "./Cart";
import {
  ArrowDownUp,
  BrushCleaning,
  BrushCleaningIcon,
  CircleOff,
} from "lucide-react";
import Swal from "sweetalert2";
const Carts = () => {
  const totalPrice = useContext(TotalPriceContext);
  const addToCart = useContext(AddToCartContext);
  const setAddToCart = useContext(SetAddToCartContext);
  const [sort, setSort] = useState(false);
  const handleSort = () => {
    const sortedList = [...addToCart].sort((a, b) => a.price - b.price);
    setAddToCart(sortedList);
    setSort(true);
  };
  const handlePurchase = () => {
    Swal.fire({
      title: "Payment Successful!",
      html: `<p class="border-t mt-3 border-gray-200 pt-4">Thanks For Purchasing</p>
      <p>Total : $${totalPrice.toFixed(2)}</p>`,

      imageUrl: successImg,
      imageWidth: 72,
      imageHeight: 72,
      imageAlt: "Custom image",
    });
    setAddToCart([]);
  };
  return (
    <div>
      {" "}
      {addToCart.length > 0 ? (
        <div className="bg-gray-100 mb-5 pb-5">
          <div className="mb-15 pt-15 max-w-[1200px] items-center mx-auto lg:flex justify-between">
            <h3 className="text-[24px] font-bold text-center ">Cart</h3>
            <div className="lg:flex mb-3 gap-4 items-center">
              <h3 className=" text-center lg:text-[24px] lg:font-bold mb-4 lg:mb-0">
                Total Cost : ${totalPrice.toFixed(2)}
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={handleSort}
                  className={`${
                    sort
                      ? "text-center btn bg-[#8332C5] mb-3 lg:mb-0 border  text-white rounded-[32px]"
                      : "text-center btn text-[#8332C5] mb-3 lg:mb-0 border border-[#8332C5] bg-white rounded-[32px]"
                  }`}
                >
                  {sort ? "Sorted By Price" : "Sort By Price"}{" "}
                  <img
                    className={`${sort ? "hidden" : ""}`}
                    src={sortIcon}
                    alt=""
                  />{" "}
                  <ArrowDownUp className={`${sort ? "block" : "hidden"}`} />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handlePurchase}
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
        <h3 className="text-center bg-gray-100 flex items-center justify-center text-3xl text-[#ff0000] font-semibold min-h-[300px]">
          Your Cart Is Empty !!!
          <BrushCleaningIcon
            size={32}
            color="#ff0000"
            className="ml-3"
            strokeWidth={2}
          />
        </h3>
      )}
    </div>
  );
};

export default Carts;
