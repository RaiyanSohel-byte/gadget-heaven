import { AddToCartContext, TotalPriceContext } from "../../Root";
import Cart from "./Cart";

import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <div className="text-center bg-color-main px-4 py-10 lg:py-[64px] lg:px-[210px]">
        <h3 className="text-3xl text-white max-w-[1120px] mx-auto lg:text-[32px] font-bold mb-[24px]">
          Product Details
        </h3>
        <p className="mb-[24px] text-white max-w-[796px] mx-auto text-xs lg:text-[1rem]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-3">
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-white text-[#a544e9] font-extrabold px-16 py-3 rounded-[32px]"
                  : " border text-white border-white px-16 py-3 rounded-[32px]"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-white text-[#a544e9] font-extrabold px-16 py-3 rounded-[32px]"
                  : " border text-white border-white px-16 py-3 rounded-[32px]"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
