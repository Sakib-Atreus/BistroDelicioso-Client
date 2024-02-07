import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, desc }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} desc={desc}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center items-center mb-4">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline text-orange-400 border-0 border-b-4 uppercase">
          Order Your Favourite Food
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
