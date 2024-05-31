import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img className="card-logo" src={
          CDN_URL+
          resData.img
        } />
        <h3 className="card-name">{resData.name}</h3>
        <h4 className="cuisine">{resData.cusine}</h4>
        <h4 className="star-rating">{resData.rating} ⭐</h4>
        <h5 className="delivery-time">Delivery Time: {resData.time} mins</h5>
      </div>
    );
  };

  export default RestaurantCard;