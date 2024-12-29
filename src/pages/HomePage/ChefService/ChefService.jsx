import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div
      className="px-28 py-32"
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white text-center py-24 px-40">
        <h2 className="text-5xl mb-2">Bistro Boss</h2>
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
