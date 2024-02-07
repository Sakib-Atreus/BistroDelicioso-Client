import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter((item) => item.category === "drinks");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const dessert = menu.filter((item) => item.category === "dessert");

    return (
        <div>
            <Helmet>
                <title>Bistro Delicioso | Order Food</title>
            </Helmet>
        <Cover
            img={orderCover}
            title="Order Food"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, corrupti?"
        ></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="uppercase">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
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
                <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
        </Tabs>
        </div>
  );
};

export default Order;
