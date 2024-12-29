import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div
      className="py-8 px-6 sm:py-16 sm:px-12 md:px-28 md:py-32"
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white text-center py-4 px-6 md:py-24 md:px-40">
        <h2 className="text-2xl md:text-5xl mb-2">Bistro Boss</h2>
        <p className="text-[#151515]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
