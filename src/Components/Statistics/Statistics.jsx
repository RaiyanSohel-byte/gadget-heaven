import React, { useContext } from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GadgetsContext } from "../../Root";

const Statistics = () => {
  const data = useContext(GadgetsContext);
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
      </div>
      <div className="bg-gray-100 p-10">
        <div className="max-w-[1280px] mx-auto">
          <h3 className="text-[24px] font-bold mt-12 mb-8">Statistics</h3>
        </div>
        <div className="bg-white max-w-[1280px] mx-auto mb-14 p-12 rounded-xl">
          <ResponsiveContainer
            width="100%"
            height={400}
            className="w-full mx-auto"
          >
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" fill="#9538E2" />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#ff7300"
                fill="#ff7300"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
