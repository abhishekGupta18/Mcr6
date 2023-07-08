import { NavLink, useParams } from "react-router-dom";

import { useRestaurantContext } from "../Context/RestaurantContext";

export const CuisinePage = () => {
  const { restaurantCuisine, restaurantDetails } = useRestaurantContext();
  const { cuisineId } = useParams();
  const findCuisine = restaurantCuisine?.find(
    (cuisine) => cuisine?.id === Number(cuisineId)
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-4xl font-bold">Food Ordering App</p>
        <div className="flex flex-col justify-center items-center mt-4 ">
          <p className=" text-2xl font-bold mb-[2rem]">Select Your Cuisine:</p>
          <ul className="flex items-center gap-8">
            {restaurantCuisine?.map((item) => (
              <NavLink to={`/cuisine/${item?.id}`}>
                {" "}
                <button className="text-white-color text-xl bg-primary-color rounded-[0.5rem] py-2 px-4">
                  {item?.name}
                </button>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[5rem]">
        <ul>
          {restaurantDetails
            ?.filter((restaurant) => restaurant?.id === findCuisine?.id)
            .map((item) => (
              <li>
                <p className="mb-8 text-2xl font-bold  ">{item?.name}</p>
                <ul className="flex gap-8 flex-wrap ">
                  {item?.menu?.map((dish) => (
                    <li className="flex flex-col gap-4 shadow-lg p-4 rounded-[0.5rem] ">
                      <img
                        src={dish?.imgSrc}
                        alt="dish"
                        className="w-[250px] h-[250px] rounded-[0.5rem] object-cover"
                      />
                      <p className=" font-medium text-[#262626]">
                        {dish?.name}
                      </p>
                      <p className=" font-medium text-[#262626]">
                        Rs. {dish?.price} for {dish?.qty}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
        <NavLink to="/">
          {" "}
          <button className="text-white-color text-xl bg-[#3b82f6] rounded-[0.5rem] py-2 px-4 my-8 hover:bg-primary-color">
            Back To Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};
