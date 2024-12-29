import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"Order Now"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-32"
      >
        <TabList className="flex justify-center space-x-8 mb-12">
          <Tab
            selectedClassName="border-b-4 border-[#BB8506] text-yellow-600"
            className="cursor-pointer py-2 text-gray-600 focus:outline-none text-sm sm:text-lg md:text-xl font-semibold uppercase"
          >
            Salad
          </Tab>
          <Tab
            selectedClassName="border-b-4 border-[#BB8506] text-yellow-600"
            className="cursor-pointer py-2 text-gray-600 focus:outline-none text-sm sm:text-lg md:text-xl font-semibold uppercase"
          >
            Pizza
          </Tab>
          <Tab
            selectedClassName="border-b-4 border-[#BB8506] text-yellow-600"
            className="cursor-pointer py-2 text-gray-600 focus:outline-none text-sm sm:text-lg md:text-xl font-semibold uppercase"
          >
            Soups
          </Tab>
          <Tab
            selectedClassName="border-b-4 border-[#BB8506] text-yellow-600"
            className="cursor-pointer py-2 text-gray-600 focus:outline-none text-sm sm:text-lg md:text-xl font-semibold uppercase"
          >
            Desserts
          </Tab>
          <Tab
            selectedClassName="border-b-4 border-[#BB8506] text-yellow-600"
            className="cursor-pointer py-2 text-gray-600 focus:outline-none text-sm sm:text-lg md:text-xl font-semibold uppercase"
          >
            Drinks
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
