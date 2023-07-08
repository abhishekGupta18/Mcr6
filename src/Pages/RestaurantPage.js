import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../Context/RestaurantContext";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
export const RestaurantPage = () => {
  const { restaurantDetails } = useRestaurantContext();
  const { restaurantId } = useParams();

  const findRestaurant = restaurantDetails?.find(
    (item) => item?.id === Number(restaurantId)
  );

  return (
    <div className="flex flex-col items-center my-8 gap-16">
      <div className="flex items-center justify-between gap-[15rem] ">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{findRestaurant?.name}</p>
          <p className=" font-medium text-[#262626]">
            {findRestaurant?.description}
          </p>
          <p className=" font-medium text-[#262626]">
            {findRestaurant?.address}
          </p>
          <p className=" font-medium text-[#262626]">{findRestaurant?.phone}</p>
          <p className=" font-medium text-[#262626]">
            average rating : {findRestaurant?.averageRating}
          </p>
        </div>
        <button className="text-white-color  bg-primary-color rounded-[0.5rem] py-1 px-2">
          Add Review
        </button>
      </div>
      <hr class="border  border-amber-500  w-[50%]" />
      <p className="text-3xl font-bold mr-[27rem]">Reviews</p>

      <div>
        <div>
          <ul className="flex flex-col gap-4">
            {findRestaurant?.ratings?.map((item) => (
              <li className="flex items-center gap-[15rem] ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item?.pp}
                      alt="profile pic"
                      className="w-[3rem] h-[3rem] rounded-[50%] object-cover"
                    />
                    <p>{item?.revName}</p>
                  </div>
                  <p>{item?.comment}</p>
                </div>
                <div>
                  <p className="bg-primary-color text-white-color px-1 rounded-[0.2rem]">
                    {item?.rating} ★
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
