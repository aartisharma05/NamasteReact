
import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../config";
import {useState} from "react";

const Body = () => {
console.log(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState(restaurantList);

  const [state, setState] = useState("false");

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant)=> restaurant.info.name.includes(searchText));
};
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Here..."
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
        
        <button
          className="search-btn"
          onClick={() => {
            
            const data = filterData(searchText, restaurants)
          setRestaurant(data);
        }
            
          }
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
