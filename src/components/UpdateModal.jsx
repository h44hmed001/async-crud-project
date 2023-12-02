import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../rtk/crudSlice";

const UpdateModal = ({ setEditModal, userId }) => {
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const singleUser = users.filter((user) => user.id == userId);
  const [updatedUser, setUpdatedUser] = useState(singleUser[0]);
  const handleFormChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed  top-0 flex items-center justify-center w-full  min-h-screen right-0 ">
      <div
        onClick={() => setEditModal(false)}
        className="bg-black absolute opacity-40 w-full h-full"
      />
      <div className="bg-white p-8  flex text-black flex-col items-center  h-full z-[999]  rounded-lg w-[50%]">
        <div className="w-full">
          <h1>Edit Profile</h1>
          <input
            name="name"
            placeholder="Enter your name"
            className="w-full p-2"
            type="text"
            onChange={handleFormChange}
            value={updatedUser.name}
          />
        </div>
        <div className="w-full">
          <input
            name="email"
            placeholder="Enter your Email"
            className="w-full p-2"
            type="text"
            value={updatedUser.email}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full">
          <input
            name="age"
            placeholder="Enter your age"
            className="w-full p-2"
            value={updatedUser.age}
            onChange={handleFormChange}
            type="text"
          />
        </div>
        <div className="w-full">
          <input
            name="gender"
            placeholder="Enter your gender"
            className="w-full p-2"
            value={updatedUser.gender}
            onChange={handleFormChange}
            type="text"
          />
        </div>
        <button
          onClick={() => [
            dispatch(updateUser(updatedUser)),
            setEditModal(false),
          ]}
          className="bg-blue-500 text-white font-semibold px-4"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
