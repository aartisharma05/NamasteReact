import {RESTAURANT_IMG_URL} from "../config";


export const RestaurantCard = ({ name, avgRating, cloudinaryImageId }) => {
  // console.log(restaurant);
  // const { name, avgRating, cloudinaryImageId } = restaurant.info;
  return (
    <div className="restaurant-card">
      <img
        alt="restaurant-img"
        src={
          RESTAURANT_IMG_URL +
          cloudinaryImageId
        }
      />
      <div className="card-info">
        <p>{name}</p>
        {/* <p>{restaurant.info?.cuisines.join(", ")}</p> */}
        <p>Rating : {avgRating}</p>
      </div>
    </div>
  );
};

