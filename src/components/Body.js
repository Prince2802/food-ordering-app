import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input></input> <button className="button">Search</button>
        </div>
        <div className="res-container">
         {
          resList.map(res => <RestaurantCard key={res.id} resData={res}/>)
         }
        </div>
      </div>
    );
  };

  export default Body;