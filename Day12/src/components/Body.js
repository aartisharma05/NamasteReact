
import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../config";
import {useState, useEffect} from "react";

const Body = () => {
console.log(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState(restaurantList);

//without dependency array =>useState will be called on every render.
  // on empty dependency array=> useState will be called only once after render
  //if we have dependent state variable inside our dependecy array then our useState will be called on every change in the state variable
 useEffect(()=>{
  //  console.log("on state change")
   //API Call
   getRestaurantList();
 },[] );
//  console.log("render");
const url="";
async function getRestaurantList(){
  const data = await fetch(url);
  const json = await data.json();

return json;
}


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
