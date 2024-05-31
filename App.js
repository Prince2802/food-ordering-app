import React from "react";
import ReactDOM from "react-dom/client";

/*
    Header
      -logo
      -navbar
    Body
      -searching/filtering
      -RestaurantComponent
      -RestaurantCards
        -img
        -Name of Restaurant
        -Star Rating
        -Delivery Time
        -Cuisine
    Footer
      -copyright
      -links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="res-logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Account</li>
          <img className="user-logo" src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"/>
          <li>Cart</li>
          <img className="user-logo" src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"/>
          <li>Info</li>
          <img className="user-logo" src="https://cdn-icons-png.flaticon.com/128/8644/8644718.png"/>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (food) => {
  // const { resObj } = food;
  return (
    <div className="res-card">
      <img className="card-logo" src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
        food.image
      } />
      <h3 className="card-header">{food.name}</h3>
      <h4 className="cuisine">{food.cusine}</h4>
      <h4 className="star-rating">{food.rating} ⭐</h4>
      <h5 className="delivery-time">Delivery Time: {food.time} mins</h5>
    </div>
  );
};

const resObj = {

}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input></input> <button className="button">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard image= "harq7lqtiwy2bd4ppb8q" name="Momo Junction" cusine="Chinese" rating="4.0" time="50"/>
        <RestaurantCard image= "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_614178.JPG" name="KFC" cusine="Fast Food" rating="4.0" time="45" />
        <RestaurantCard image= "e33e1d3ba7d6b2bb0d45e1001b731fcf" name="Burger King" cusine="Burgers, Fast Food" rating="4.2" time="30" />
        <RestaurantCard image= "dd841f517c1071baef3aa697d9fe008a" name="Dominos" cusine="Pizza" rating="4.3" time="30" />
        <RestaurantCard image= "2b4f62d606d1b2bfba9ba9e5386fabb7" name="Pizza Hut" cusine="Pizza" rating="4.1" time="45" />
        <RestaurantCard image= "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e0ab56c3-3d8e-4214-8705-240795d737c0_822315.jpg" name="Subway" cusine="Fast Food" rating="3.9" time="40" />
        <RestaurantCard image= "85ccae4e3576f9330af102c46ca85395" name="Baskin Robin" cusine="Deserts" rating="4.5" time="35" />
        <RestaurantCard image= "xpvmxef4yl7umhclwojl" name="Oh Calcutta" cusine="Bengali" rating="4.5" time="" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        @Copyright
      </div>
      <div className="contact"> Contact Us :
        <a> 9958214458</a>
      </div>
      <div className="create">
        Owner : <a>Prince Chaudhary</a>
      </div>
      <div className="email">
        Email Us : <a>chaudhary.prince97@gmail.com</a>
      </div>
    </div>
  );
}

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
