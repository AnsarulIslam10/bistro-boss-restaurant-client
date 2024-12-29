import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import ChefService from "./ChefService/ChefService";
import CallUs from "./CallUs/CallUs";
import Recommends from "./Recommends/Recommends";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
