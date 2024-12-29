import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../HomePage/PopularMenu/PopularMenu";
const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default MenuPage;
