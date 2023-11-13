import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../SharedPage/Cover/Cover';
import img1 from "../../../assets/assets/menu/banner3.jpg"
import img2 from "../../../assets/assets/menu/dessert-bg.jpeg"
import img3 from "../../../assets/assets/menu/pizza-bg.jpg"
import img4 from "../../../assets/assets/menu/salad-bg.jpg"
import img5 from "../../../assets/assets/menu/soup-bg.jpg"
import img6 from "../../../assets/assets/home/chef-service.jpg"
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../../SharedPage/MenuItems/MenuItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(items => items.category === "offered")
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const salad = menu.filter(items => items.category === "salad")
    const soup = menu.filter(items => items.category === "soup")
    const drinks = menu.filter(items => items.category === "drinks")
    return (
        <div className='space-y-20'>
            <Helmet>
                <title>Food Terminal | Our Menu</title>
            </Helmet>
            <div className='space-y-10'>
                <Cover img={img1}
                    title="OUR MENU"
                    description="Would you like to try a dish?"></Cover>
                <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTitle>
                <MenuCategory items={offered} title="offered"></MenuCategory>
            </div>
            <div className='space-y-10'>
                <Cover img={img2}
                    title="DESSERTS"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                <MenuCategory items={dessert} title="dessert"></MenuCategory>
            </div>
            <div className='space-y-10'>
                <Cover img={img3}
                    title="PIZZA"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                <MenuCategory items={pizza} title="pizza"></MenuCategory>
            </div>
            <div className='space-y-10'>
                <Cover img={img4}
                    title="SALADS"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                <MenuCategory items={salad} title="salad"></MenuCategory>
            </div>
            <div className='space-y-10'>
                <Cover img={img5}
                    title="SOUPS"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                <MenuCategory items={soup} title="soup"></MenuCategory>
            </div>
            <div className='space-y-10'>
                <Cover img={img6}
                    title="drinks"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                <MenuCategory items={drinks} title="drinks"></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;