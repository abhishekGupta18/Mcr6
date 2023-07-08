import { createContext, useContext, useState } from "react";

import { cuisineData } from "../RestaurantData";
import { restaurantsData } from "../RestaurantData";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurantCuisine, setRestaurantCuisine] = useState(cuisineData);
  const [restaurantDetails, setRestaurantsData] = useState(restaurantsData);

  return (
    <RestaurantContext.Provider
      value={{ restaurantCuisine, restaurantDetails }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
