import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, recipe, price, _id, image } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          title: `${data.name} is Updated to the menu`,
          icon: "success",
          showCancelButton: false,
          timer: 1500,
        });
      }
    }
    // console.log(res.data)
  };
  return (
    <div>
      <h1 className="text-center uppercase text-4xl mt-12 mb-16">
        Update Item
      </h1>
      <div>
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
                defaultValue={name}
                placeholder="Recipe Name"
                {...register("name")}
                className="input input-bordered w-full "
              />
            </label>
            <div className="flex items-center gap-6">
              {/* Category */}
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue={category}
                  {...register("category")}
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
                  defaultValue={price}
                  placeholder="price"
                  {...register("price")}
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
                defaultValue={recipe}
                {...register("recipe")}
                className="textarea textarea-bordered h-40"
                placeholder="Recipe Details"
              ></textarea>
            </label>

            <div className="form-control my-4">
              <input
                {...register("image")}
                type="file"
                className="file-input p-1 bg-[#F3F3F3] w-full max-w-xs"
              />
            </div>
            <div className="text-center">
              <button className="btn rounded-none bg-orange-500 text-white">
                Update Recipe Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
