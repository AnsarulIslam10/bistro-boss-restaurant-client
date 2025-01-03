import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <section
      className="featured-item text-white mb-32"
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-black/60 pb-8 pt-1 sm:py-16 sm:px-12 md:pb-28 md:py-32 md:pt-8">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>
        <div className="flex justify-center flex-col sm:flex-row items-center sm:gap-16 gap-3 px-2">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p className="text-lg">March 20, 2024</p>
            <h3 className="text-xl mb-2">WHERE CAN I GET SOME?</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="uppercase btn btn-outline border-0 border-b-4 font-semibold text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
