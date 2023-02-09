import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Drinks</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Mocktails</p>
        <div className="app__specialMenu_menu_items">
        <MenuItem title="Virgin Mary" price="₹140" tags="Tomato Juice, Tabasco, LP Sauce, Fresh Lime Juice"/>
        <MenuItem title="Virgin Mojito" price="₹140" tags="Combination of Muddled Lemon Chunks, Brown Sugar,
Mint Leaves and Sprite"/>
        <MenuItem title="Fiesta 81 Fruit Punch" price="₹160" tags="A Sweet Blend of Pineapple, Orange, Mango Juice mingled
with Fresh Cream, Vanilla Ice Cream & Grenadine Syrup"/>
        <MenuItem title="Blue Sparkle" price="₹140" tags="A Sparkling Mix of Non-alcoholic Blue Curacao, & Lemonade"/>
        <MenuItem title="Litchi Surprise" price="₹140" tags="Litchi Syrup, Grenadine Syrup"/>
        <MenuItem title="Green Valley" price="₹130" tags="Green Apple Syrup with Lime Juice"/>
        <MenuItem title="Guava Fizz" price="₹130" tags="Guava Juice, Black Salt, Chat Masala, Fresh Lime"/>
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Soft Breeze</p>
        <div className="app__specialMenu_menu_items">
        <MenuItem title="Aerated Soft Drink" price="₹50" tags=""/>
        <MenuItem title="Fresh Lime Soda" price="₹70" tags=""/>
        <MenuItem title="Jal Jeera" price="₹70" tags=""/>
        <MenuItem title="Cold Coffee" price="₹100" tags=""/>
        <MenuItem title="Masala Tea" price="₹45" tags=""/>
        <MenuItem title="Coffee" price="₹65" tags=""/>
        </div>
      </div>
    </div>
    {/*
    <div style={{ marginTop: 5 }}>
      <button type="button" className="custom__button">Starters</button>
    </div>
    */}

    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant" style={{ marginTop: 10 }}>North Indian</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Vegetarian</p>
        <div className="app__specialMenu_menu_items">
        <MenuItem title="Paneer" price="₹350" tags="Kadhai, Lababdar, Butter Masala, Makhani"/>
        <MenuItem title="Palak" price="₹395" tags="Fresh Spinach Cooked to Your Choice"/>
        <MenuItem title="Aloo Gobhi Masala" price="₹325" tags="Cauliflower Cooked With Fenugreek & Aromatic Spices"/>
        <MenuItem title="Soya" price="₹350" tags="Lababdar Chaap Masala/Keema Matar/Kadhai"/>
        <MenuItem title="Subz Miloni" price="₹350" tags="Symphony of Exotic Vegetables Stir Fried With Aromatic Spices"/>
        <MenuItem title="Grand Dal Makhani" price="₹325" tags="Black Lentil Cooked Overnight on Charcoal, Finished with Butter & Cream"/>
        <MenuItem title="Dal Gharwali" price="₹290" tags="Red Lentils Centered with Cumin seeds, Garlic, Asafoetida &Whole Red Chillies in Pure Ghee"/>
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src='https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2020/10/pepper-delight-butter-chicken-2-scaled.jpg?resize=1707%2C2560&ssl=1'/>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Non Vegetarian</p>
        <div className="app__specialMenu_menu_items">
        <MenuItem title="Murg Makhanwala" price="₹390" tags="All Time Favorite Butter Chicken"/>
        <MenuItem title="Murgh Handi Lazeez" price="₹390" tags="Partially Roasted Chicken Tikka in a Smooth Tomato & Butter Gravy"/>
        <MenuItem title="Murg Dhaniya Curry" price="₹390" tags="Slow Cooked Home Style Chicken"/>
        <MenuItem title="Murg Rara" price="₹415" tags="Succulent Chicken Morsels Broiled With Minced Chicken & Home Ground Spices"/>
        <MenuItem title="Gosht Tawa Masala" price="₹495" tags="Morsels of Tender Mutton Cooked With Chefs Secret Recipe"/>
        <MenuItem title="Rogan Josh" price="₹495" tags="Succulent Mutton Prepared With Authentic Kashmiri Spices"/>
        <MenuItem title="Rara Gosht" price="₹525" tags="Tender Morsels & Mutton Cooked With Spices & Fresh Coriander"/>
        <MenuItem title="Chicken Tikka Lababdar" price="₹515" tags="Cooked on a Griddle With Spices"/>
        <MenuItem title="Saag Gosht" price="₹525" tags="Tender Mutton & Spinach Cooked with HomeGround Spices"/>
        </div>
      </div>
    </div>

  </div>
);



export default SpecialMenu;