import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"Add an item"}
        subHeading={"---What's new?---"}
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto p-6 bg-[#F3F3F3]"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex items-center gap-6">
            {/* Category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                min="0"
                placeholder="price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          {/* recepie details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-40"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <div className="form-control my-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input p-1 bg-[#F3F3F3] w-full max-w-xs"
            />
          </div>
          <button className="btn rounded-none bg-orange-500 text-white">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
