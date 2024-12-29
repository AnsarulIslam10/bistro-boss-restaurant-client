import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets//menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets//menu/pizza-bg.jpg";
import saladBg from "../../../assets//menu/salad-bg.jpg";
import soupBg from "../../../assets//menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const MenuPage = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title={"Our Menu"}
        description="Would you like to try a dish?"
      ></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"desserts"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={dessertBg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={saladBg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={soupBg}
      ></MenuCategory>
    </div>
  );
};

export default MenuPage;
