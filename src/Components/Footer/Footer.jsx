import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 lg:pt-[100px]">
      <div className="border-b border-gray-200 mb-4 max-w-[1280px] mx-auto text-center pb-8">
        <h3
          className="text-[32px] font-bold mb-2
        "
        >
          Gadget Heaven
        </h3>
        <p className="px-3 text-sm text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto lg:flex justify-center items-start my-8">
        <div className="max-w-[160px] mx-auto text-center">
          <h3 className="font-bold mb-4">Services</h3>
          <div className="text-gray-500 text-sm">
            <p className="mb-3">Product Support</p>
            <p className="mb-3">Order Tracking</p>
            <p className="mb-3">Shipping & Delivery</p>
            <p className="mb-3">Returns</p>
          </div>
        </div>
        <div className="max-w-[160px] mx-auto text-center">
          <h3 className="font-bold mb-4">Company</h3>
          <div className="text-gray-500 text-sm">
            <p className="mb-3">About Us</p>
            <p className="mb-3">Careers</p>
            <p className="mb-3">Contact</p>
          </div>
        </div>
        <div className="max-w-[160px] mx-auto text-center">
          <h3 className="font-bold mb-4">Legal</h3>
          <div className="text-gray-500 text-sm">
            <p className="mb-3">Terms Of Service</p>
            <p className="mb-3">Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
