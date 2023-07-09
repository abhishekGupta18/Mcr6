import { NavLink, useParams } from "react-router-dom";
import { useRestaurantContext } from "../Context/RestaurantContext";
import { Modal } from "@mui/material";
import { useState } from "react";
export const RestaurantPage = () => {
  const [addReview, setAddReview] = useState({
    rating: null,
    comment: "",
    revName: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { restaurantDetails, setRestaurantsDetails } = useRestaurantContext();
  const { restaurantId } = useParams();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const findRestaurant = restaurantDetails?.find(
    (item) => item?.id === Number(restaurantId)
  );
  console.log(restaurantDetails);
  const addReviewHandler = (e) => {
    e.preventDefault();
    // return setRestaurantsDetails(
    //   restaurantDetails?.map((item) => {
    //     if (item?.id === findRestaurant?.id) {
    //       return {
    //         ...findRestaurant,
    //         ratings: [...findRestaurant?.ratings, addReview],
    //       };
    //     } else {
    //       return item;
    //     }
    //   })
    // );

    const findAddReviewRestaurant = restaurantDetails?.find(
      (item) => item?.id === findRestaurant?.id
    );

    findAddReviewRestaurant?.ratings?.push(addReview);
    setRestaurantsDetails((prev) => {
      return prev?.map((item) =>
        item?.id === findRestaurant?.id ? findAddReviewRestaurant : item
      );
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex flex-col items-center my-8 gap-16">
      <NavLink
        to="/"
        className="absolute text-3xl top-[5%] bottom-[100%] left-[10%] right-[90%]"
      >
        ←
      </NavLink>
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
        <button
          className="text-white-color  bg-primary-color rounded-[0.5rem] py-1 px-2"
          onClick={() => openModal()}
        >
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
      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ ...style }}>
          <form
            onSubmit={addReviewHandler}
            className=" flex flex-col p-4 bg-primary-color gap-4"
          >
            <label>
              Name:{" "}
              <input
                type="text"
                value={addReview?.revName}
                onChange={(e) =>
                  setAddReview({ ...addReview, revName: e.target.value })
                }
              />
            </label>
            <label>
              Comment:{" "}
              <input
                value={addReview?.comment}
                type="text"
                onChange={(e) =>
                  setAddReview({ ...addReview, comment: e.target.value })
                }
              />
            </label>
            <label>
              Rating:{" "}
              <select
                value={addReview?.rating}
                onChange={(e) =>
                  setAddReview({
                    ...addReview,
                    rating: e.target.value,
                  })
                }
              >
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <button
              type="submit"
              className="text-white-color mx-auto text-xl bg-[#3b82f6] rounded-[0.5rem] py-2 px-4 my-8 w-[40%]"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
