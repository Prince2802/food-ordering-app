import { CDN_URL } from '../utils/constants';

const RestaurantCard = (restaurant) => {
  const { resData } = restaurant;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-xl hover:bg-gray-400 size-[500px]">
      {
        <img
          className="rounded-xl"
          alt="restaurant"
          src={CDN_URL + cloudinaryImageId}
        />
      }
      <h3 className="font-extrabold py-2 text-lg">{name}</h3>
      <h4 className="py-1 font-medium">{cuisines.join(', ')}</h4>
      <h4 className="py-1 font-medium">{avgRating} ⭐</h4>
      <h4 className="py-1 font-medium"> {costForTwo ?? '₹200 for two'}</h4>
      <h5 className="py-1 font-medium">Delivery Time: {sla?.slaString}</h5>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-xl">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
