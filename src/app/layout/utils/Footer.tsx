import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-light text-primary grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <h1 className="text-2xl font-bold text-center mb-10 mt-10">
            About Us
          </h1>
          <div className="text-center">
            <h1>We are the best in Town</h1>
            <h1>We are the best in Town</h1>
            <h1>We are the best in Town</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-10 mt-10">
            Contact Us
          </h1>
          <div className="text-center">
            <h1>You Contact Us Anytime</h1>
            <h1>You Contact Us Anytime</h1>
            <h1>You Contact Us Anytime</h1>
            <h1>You Contact Us Anytime</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-10 mt-10">
            Portfolio
          </h1>
          <div className="text-center">
            <h1>Our Portfolio is our Priority</h1>
            <h1>Our Portfolio is our Priority</h1>
            <h1>Our Portfolio is our Priority</h1>
            <h1>Our Portfolio is our Priority</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-10 mt-10">
            Location
          </h1>
          <div className="text-center">
            <h1>Pakistan</h1>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end lg:justify-end text-primary text-sm mt-10 sm:flex justify-center">
        CopyRight Reserved @ Macbook.com
      </div>
    </div>
  );
}
