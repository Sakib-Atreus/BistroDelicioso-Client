import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Bistro Delicioso | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"our menu"}
        desc={"Would you like to try a dish?"}
      ></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Items */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertImg}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem ipsam, quaerat cum eaque perferendis."
        }
      ></MenuCategory>
      {/* Pizza Menu Items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem ipsam, quaerat cum eaque perferendis."
        }
      ></MenuCategory>
      {/* Salad Menu items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem ipsam, quaerat cum eaque perferendis."
        }
      ></MenuCategory>
      {/* Soup Menu Items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem ipsam, quaerat cum eaque perferendis."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
