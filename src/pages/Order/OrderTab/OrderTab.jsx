import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20 px-2 lg:px-0">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
