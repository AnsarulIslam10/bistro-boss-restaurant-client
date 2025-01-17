import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section className="mb-32 px-2">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="uppercase btn btn-outline border-0 border-b-4 font-semibold">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
