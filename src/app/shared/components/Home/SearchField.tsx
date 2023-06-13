import React from "react";

export default function SearchField() {
  return (
    <>
      <div className="w-full relative mt-5">
        <input
          type="text"
          placeholder="Enter an address neighborhood, city etc"
          className="rounded-lg outline-none h-12 px-3 w-full"
        />
        <button className="py-2 px-2 rounded-lg bg-primary text-sm text-light absolute right-1 top-[6px]">
          Search
        </button>
      </div>
    </>
  );
}
