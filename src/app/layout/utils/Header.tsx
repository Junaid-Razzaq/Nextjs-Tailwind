"use client";
import React, { useState } from "react";

export default function Header() {
  const [isopen, setisOpen] = useState<boolean>(false);
  return (
    <header>
      <div className="container">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h4 className="text-3xl font-semibold text-primary">
                Real Estate
              </h4>
            </div>
            <div>
              <ul className="flex items-center gap-5">
                <li className="text-medium text-base">Home</li>
                <li>How it works</li>
                <li>Agnets</li>
                <li>Sales</li>
              </ul>
            </div>
            <div>
              <button className="py-3 px-3 text-light font-medium bg-primary rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="block lg:hidden">
          <div className="flex justify-between items-center h-20">
            <div>
              {" "}
              <h4 className="text-3xl font-semibold text-primary">
                Real Estate
              </h4>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setisOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={`fixed ${
            isopen ? "block" : "hidden"
          } h-screen overflow-hidden overflow-y-scroll w-full top-0 right-0 bg-light z-20`}
        >
          <div className="container">
            <div className="flex justify-between items-center h-20">
              <div>
                {" "}
                <h4 className="text-3xl font-semibold text-primary">
                  Real Estate
                </h4>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setisOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="text-left text-xl">
              <ul>
                <li className="flex justify-between">
                  Home{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </li>
                <li className="mt-4 flex justify-between">
                  How it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </li>
                <li className="mt-4 flex justify-between">
                  Agents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </li>
                <li className="mt-4 flex justify-between">
                  Sales
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
