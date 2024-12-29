import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommends = () => {
  return (
    <section className="my-32 px-2">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card bg-[#F3F3F3] rounded-none">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">Haddock</h2>
            <p className="text-[#151515] mb-6">
              Chargrilled fresh tuna steak (served medium rare) on classic
              Niçoise salad with French beans.
            </p>
            <div className="card-actions">
              <button className="uppercase btn btn-outline border-0 border-b-4 font-semibold text-[#BB8506]">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F3F3F3] rounded-none ">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">Roast Duck Breast</h2>
            <p className="text-[#151515] mb-6">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
            <div className="card-actions">
              <button className="uppercase btn btn-outline border-0 border-b-4 font-semibold text-[#BB8506]">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F3F3F3] rounded-none">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">Breton Fish Stew</h2>
            <p className="text-[#151515] mb-6">
              Chargrilled chicken with avocado, baby gem lettuce, baby spinach,
              shallots, French beans, walnuts, croutons and a mustard dressing
            </p>
            <div className="card-actions">
              <button className="uppercase btn btn-outline border-0 border-b-4 font-semibold text-[#BB8506]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
