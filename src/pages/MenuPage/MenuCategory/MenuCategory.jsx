import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, description, coverImg }) => {
  return (
    <div className="my-32 px-2 lg:px-0">
      {title && <Cover img={coverImg} title={title} description={description}></Cover>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-24">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to={`/order/${title}`} className="uppercase btn btn-outline border-0 border-b-4 font-semibold">
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
