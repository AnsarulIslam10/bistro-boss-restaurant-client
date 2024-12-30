import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card bg-[#F3F3F3] rounded-none">
      <figure>
        <img src={image} className="w-full" />
      </figure>
      <p className="absolute right-2 top-2 px-3 py-2 bg-black text-white font-semibold">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-[#151515] mb-6">{recipe}</p>
        <div className="card-actions">
          <button className="uppercase btn bg-[#E8E8E8] btn-outline border-0 border-b-4 font-semibold text-xl hover:text-[#BB8506] text-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
