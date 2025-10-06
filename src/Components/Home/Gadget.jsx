import React from "react";
import { NavLink } from "react-router";

const Gadget = ({ gadget }) => {
  return (
    <div className="card bg-base-100 rounded-[16px] w-[300px] mx-auto shadow-sm ">
      <figure className="px-[20px] pt-[20px]">
        <img
          className="rounded-[12px] w-[280px] h-[180px]"
          src={gadget.product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{gadget.product_title}</h2>
        <p className="text-gray-500">Price : {gadget.price}</p>
        <div className="card-actions justify-start">
          <NavLink
            to={`/${gadget.product_id}`}
            className="btn btn-outline rounded-[32px] text-color-main border-[#9538e2]"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
