import React from "react";
import Images from "../../assets/page";
import Image from "next/image";

export const Detailpage = () => {
  const { ConstructionTwo } = Images();
  return (
    <div className="lg:flex md:flex justify-around gap-10">
      <div className="lg:w-2/4">
        <h1 className="font-bold lg:text-5xl md:text-5xl sm:text-4xl text-primary mt-5 ">
          Why Choose Us
        </h1>
        <h1 className="text-justify mt-5">
          Because We deleiverd on time to maintain our Quality.Because We
          deleiverd on time to maintain our Quality.Because We deleiverd on time
          to maintain our Quality.Because We deleiverd on time to maintain our
          Quality{" "}
        </h1>
        <div className="mt-10 mb-10">
          <button className="bg-primary text-light rounded-lg text-sm py-2 px-2">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="lg:w-2/4 md:w-2/4 sm:w-4/4 mb-10">
        <Image
          src={ConstructionTwo}
          alt="Construction"
          className="w-auto h-auto"
        />{" "}
      </div>
    </div>
  );
};
