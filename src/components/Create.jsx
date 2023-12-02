import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../rtk/crudSlice";

const Create = () => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleFormChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userDetail));
  };
  return (
    <div className="text-black">
      <form className="flex flex-col gap-8">
        <input
          onChange={handleFormChange}
          name="name"
          placeholder="Enter your Name"
          className="w-full p-2"
          type="text"
        />

        <div className="w-full">
          <input
            onChange={handleFormChange}
            name="email"
            placeholder="Enter your Email"
            className="w-full p-2"
            type="text"
          />
        </div>
        <div className="w-full">
          <input
            onChange={handleFormChange}
            name="age"
            className="w-full p-2"
            placeholder="Enter your Age"
            type="text"
          />
        </div>
        <button
          className="text-white bg-blue-400 p-2"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
        <div className="text-white">
          <input
            onChange={handleFormChange}
            value="Male"
            name="gender"
            type="radio"
          />
          <label>Male</label>
        </div>
        <div className="text-white">
          <input
            onChange={handleFormChange}
            value="Female"
            name="gender"
            type="radio"
          />
          <label>Female</label>
        </div>
      </form>
    </div>
  );
};

export default Create;
