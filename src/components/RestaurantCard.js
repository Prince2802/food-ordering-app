import { CDN_URL } from "../utils/constants";

const RestaurantCard = (restaurant) => {
    const { resData } = restaurant;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info

    return (
      <div className="res-card">
        {<img className="card-logo" alt="restaurant" src={
          CDN_URL+
          cloudinaryImageId
        } />}
        <h3 className="card-name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="star-rating">{avgRating} ⭐</h4>
        <h4 className="cost-for-two"> {costForTwo ?? '₹200 for two'}</h4>
        <h5 className="delivery-time">Delivery Time: {sla?.slaString}</h5>
      </div>
    );
  };

  export default RestaurantCard;