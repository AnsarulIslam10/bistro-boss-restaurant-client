import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex">
      <div className="flex items-cente gap-8">
        <img
          className="h-24 w-28 rounded-tr-full object-center rounded-br-full rounded-bl-full"
          src={image}
          alt=""
        />
        <div>
          <h3 className="text-xl uppercase mb-2">{name} -----------</h3>
          <p className="text-[#737373] max-w-sm">{recipe}</p>
        </div>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
