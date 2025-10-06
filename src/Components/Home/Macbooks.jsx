import React from "react";
import { NavLink, useLoaderData } from "react-router";

const Macbooks = () => {
  const loadedmacbooks = useLoaderData();
  const macbooks = loadedmacbooks.filter((macbook) =>
    macbook.product_title.includes("MacBook")
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 lg:my-0">
      {macbooks.map((macbook) => (
        <div className="card bg-base-100 rounded-[16px] w-[300px] mx-auto shadow-sm ">
          <figure className="px-[20px] pt-[20px]">
            <img
              className="rounded-[12px] w-[280px] h-[180px]"
              src={macbook.product_image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{macbook.product_title}</h2>
            <p className="text-gray-500">Price : {macbook.price}</p>
            <div className="card-actions justify-start">
              <NavLink
                to={`/${macbook.product_id}`}
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

export default Macbooks;
