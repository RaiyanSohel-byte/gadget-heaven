import { useContext } from "react";
import { HandleAddToCartContext, HandleRemoveFromFavContext } from "../../Root";
import { ImCancelCircle } from "react-icons/im";

const Wishlist = ({ fav }) => {
  const handleAddToCart = useContext(HandleAddToCartContext);
  const handleRemoveFromFav = useContext(HandleRemoveFromFavContext);
  return (
    <div className="bg-white max-w-[1280px] mx-auto lg:flex items-start justify-between p-8  rounded-[16px] mb-6">
      <div className="bg-gray-100 p-3 rounded-[16px]">
        <img
          className="w-[200px] lg:h-[124px] mx-auto"
          src={fav.product_image}
          alt=""
        />
      </div>
      <div>
        <h3 className="font-semibold text-[24px] mb-[18px] text-center lg:text-left my-4 lg:my-0">
          {fav.product_title}
        </h3>
        <p className="text-gray-500 mb-4">{fav.description}</p>
        <p className="text-[20px] font-semibold">Price : ${fav.price}</p>
        <div>
          <button
            onClick={() => handleAddToCart(fav)}
            className="btn bg-[#a544e9] rounded-[32px] text-white mt-3"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <ImCancelCircle
          onClick={() => handleRemoveFromFav(fav)}
          size={24}
          className="text-red-500 hidden lg:block cursor-pointer"
        />
        <button
          onClick={() => handleRemoveFromFav(fav)}
          className="btn bg-red-600 mt-4 text-white rounded-[32px] lg:hidden"
        >
          Remove From fav
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
