import Link from "next/link";
import { useEffect, useRef, createRef } from "react";
import { getAllCategories } from "../prisma/categories";
import styles from "../styles/Menu.module.css";
import * as Scroll from 'react-scroll'
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MyPNG} from "../public/logo.png"

export const getStaticProps = async ({ req }) => {
  const categories = await getAllCategories();
  
  const updatedCategories = categories.map((category) => ({
    ...category,
  }));
  return { props: { categories: updatedCategories } };
};
const Menu = ({ categories }) => {
 let Link = Scroll.Link;
  return (
    <div>
      <div>
        {categories.map((category) => (
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-4  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><Link to={category.name} smooth={true}>{category.name}</Link></button>
        ))}
      </div>
      {categories.map((category) => (
        <div key={category.name} >
          <h1 className={styles.categoryHeader} key={category.id} id={category.name}>
            {category.name}
          </h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {category.items.map((item) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://rockandwings.rocks/wp-content/uploads/sites/9/2017/06/highway-to-hell-02-600x600.jpg" alt="Mountain"></img>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">
                        {item.description}
                    </p>
                    {item.price}
            </div>
            </div>
          ))}
        </div>
        </div>
      ))}
      <ScrollToTop
        smooth
        
        color="red"
        
        />
    </div>
  );
};

export default Menu;
