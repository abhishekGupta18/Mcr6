import { useRestaurantContext } from "../Context/RestaurantContext";
import { NavLink } from "react-router-dom";
export const Home = () => {
  const { restaurantCuisine } = useRestaurantContext();

  return (
    <div className="flex flex-col items-center justify-center mt-[10rem]">
      <p className="text-4xl font-bold">Food Ordering App</p>
      <div className="flex flex-col justify-center items-center mt-[5rem] ">
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
  );
};
