import React, { useContext } from "react";
import { AddToFavContext } from "../../Root";
import Wishlist from "./Wishlist";

const Wishlists = () => {
  const addToFav = useContext(AddToFavContext);
  return (
    <div>
      {" "}
      {addToFav.length > 0 ? (
        <div className="bg-gray-100 mb-5 pb-5">
          <div className="mb-15 pt-15 max-w-[1200px] items-center mx-auto lg:flex justify-between">
            <h3 className="text-[24px] font-bold text-center ">Wishlist</h3>
            <div className="lg:flex mb-3 gap-4 items-center"></div>
          </div>
          {addToFav.map((fav) => (
            <Wishlist fav={fav} key={fav.product_id} />
          ))}
        </div>
      ) : (
        <h3 className="text-center bg-gray-100 flex items-center justify-center text-3xl lg:text-5xl font-bold min-h-[300px]">
          Your Wishlist Is Empty !!!
        </h3>
      )}
    </div>
  );
};

export default Wishlists;
