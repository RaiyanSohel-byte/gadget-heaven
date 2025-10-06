import React from "react";
import { NavLink, Outlet } from "react-router";
import bannerImg from "../../assets/banner.png";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7] lg:pb-[100px]">
      <div className="bg-color-main px-4 py-10 lg:py-[96px] lg:px-[210px] lg:h-[694px] max-w-[1440px] rounded-[32px] mx-auto">
        <div className="text-center">
          <h3 className="text-3xl text-white max-w-[1120px] mx-auto lg:text-[56px] font-bold mb-[24px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h3>
          <p className="mb-[24px] text-white max-w-[796px] mx-auto text-xs lg:text-[1rem]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex justify-center mb-10 lg:mb-[72px]">
          <NavLink className="btn text-color-main bg-white rounded-[32px]">
            Shop Now
          </NavLink>
        </div>
        <div className="outline-2  bg-white/10 backdrop-blur-md  outline-white flex justify-center rounded-2xl p-4">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="my-[50px] lg:mt-[424px] max-w-[1280px] mx-auto">
        <h3 className="text-2xl lg:text-[40px] font-bold text-center mb-8 lg:mb-[40px] text-black">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="lg:flex justify-center gap-6 max-w-[1280px] mx-auto items-start">
          <ul className="flex flex-wrap gap-2 lg:block bg-white px-[28px] py-[14px] rounded-xl">
            <li className="mb-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                All Products
              </NavLink>
            </li>
            <li className="mb-5">
              {" "}
              <NavLink
                to="/laptops"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                Laptops
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink
                to="/phones"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                Phones
              </NavLink>
            </li>

            <li className="mb-5">
              <NavLink
                to="/smart-watches"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                Smart Watches
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink
                to="/macbooks"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                MacBook
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink
                to="/iphones"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-[#9538E2] text-white font-bold"
                      : "text-gray-600 bg-gray-100"
                  } lg:w-[190px] w-[100px] btn   rounded-[32px] text-xs  mb-3 p-3 cursor-pointer`
                }
              >
                Iphone
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
