import React from "react";
import { NavLink, useLoaderData } from "react-router";

const SmartWatches = () => {
  const loadedwatches = useLoaderData();
  const watches = loadedwatches.filter(
    (watch) => watch.category === "Smartwatches"
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 lg:my-0">
      {watches.map((watch) => (
        <div className="card bg-base-100 rounded-[16px] w-[300px] mx-auto shadow-sm ">
          <figure className="px-[20px] pt-[20px]">
            <img
              className="rounded-[12px] w-[280px] h-[180px]"
              src={watch.product_image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{watch.product_title}</h2>
            <p className="text-gray-500">Price : {watch.price}</p>
            <div className="card-actions justify-start">
              <NavLink
                to={`/${watch.product_id}`}
                className="btn btn-outline rounded-[32px] text-color-main border-[#9538e2]"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmartWatches;
