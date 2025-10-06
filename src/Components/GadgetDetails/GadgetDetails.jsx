import { Heart } from "lucide-react";
import React, { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLoaderData, useParams } from "react-router";
import { HandleAddToCartContext, HandleAddToFavContext } from "../../Root";

const GadgetDetails = () => {
  const handleAddToFav = useContext(HandleAddToFavContext);
  const handleAddToCart = useContext(HandleAddToCartContext);

  const gadgets = useLoaderData();
  const id = useParams();
  const gadgetDetails = gadgets.find((gadget) => gadget.product_id === id.id);

  return (
    <div className="bg-[#f7f7f7]  lg:h-[880px]">
      <div className="text-center bg-color-main px-4 py-10 lg:py-[64px] lg:px-[210px] lg:h-[463px] ">
        <h3 className="text-3xl text-white max-w-[1120px] mx-auto lg:text-[32px] font-bold mb-[24px]">
          Product Details
        </h3>
        <p className="mb-[24px] text-white max-w-[796px] mx-auto text-xs lg:text-[1rem]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="lg:flex gap-8 items-start max-w-[1020px] mx-auto p-[32px] bg-white rounded-[24px] text-center lg:text-left shadow-sm">
          <div className="flex items-center justify-center mb-5 lg:mb-0 bg-[#ececec] p-5 rounded-2xl  lg:min-h-[550px]">
            <img
              className="w-[424px]"
              src={gadgetDetails.product_image}
              alt=""
            />
          </div>
          <div>
            <h3 className="font-semibold text-[28px] mb-[12px]">
              {gadgetDetails.product_title}
            </h3>

            <p className="text-[20px] font-medium mb-[16px]">
              Price : ${gadgetDetails.price}
            </p>
            <div
              className={`${
                gadgetDetails.availability
                  ? "badge rounded-[32px] bg-[#309C081A] text-[#309C08] border border-[#309C08]"
                  : "badge rounded-[32px] bg-red-200 text-red-600 border border-red-600"
              } text-xs font-bold mb-5`}
            >
              {gadgetDetails.availability ? "In Stock" : "Out of Stock"}
            </div>
            <p className="text-left text-[16px] text-gray-600 mb-[12px]">
              {gadgetDetails.description}
            </p>
            <p className="text-left text-[16px] font-bold mb-3">
              Specification:
            </p>
            <ul className="text-left text-[14px] text-gray-600 mb-4">
              {gadgetDetails.specification.map((spec, index) => (
                <li className="mb-2" key={spec}>
                  {index + 1}. {spec}
                </li>
              ))}
            </ul>

            <p className="text-[16px] text-left font-bold mb-4">Rating ⭐</p>

            <div className="flex items-center gap-4 mb-5">
              {Math.floor(gadgetDetails.rating) === 1 ? (
                <div>
                  {" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaRegStar className="text-gray-500" />
                </div>
              ) : Math.floor(gadgetDetails.rating) === 2 ? (
                <div className="flex">
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaRegStar className="text-gray-500" />{" "}
                  <FaRegStar className="text-gray-500" />{" "}
                  <FaRegStar className="text-gray-500" />
                </div>
              ) : Math.floor(gadgetDetails.rating) === 3 ? (
                <div className="flex">
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaRegStar className="text-gray-500" />{" "}
                  <FaRegStar className="text-gray-500" />
                </div>
              ) : Math.floor(gadgetDetails.rating) === 4 ? (
                <div className="flex">
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaRegStar className="text-gray-500" />{" "}
                </div>
              ) : (
                <div className="flex">
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />{" "}
                  <FaStar className="text-yellow-400" />
                </div>
              )}
              <div>
                <button className="bg-gray-100 py-[7px] px-[14px] rounded-[32px] text-xs font-bold">
                  {gadgetDetails.rating}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleAddToCart(gadgetDetails)}
                className="btn bg-[#9538E2] text-white text-[14px] rounded-[32px]"
              >
                Add To Cart <IoCartOutline size={18} />
              </button>
              <NavLink
                onClick={() => handleAddToFav(gadgetDetails)}
                className="w-[40px] h-[40px] border border-gray-300 bg-white rounded-[50%] flex justify-center items-center"
              >
                <Heart size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
