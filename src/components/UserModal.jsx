import React from "react";
import { useSelector } from "react-redux";

const UserModal = ({ setUserModal, userId }) => {
  const { users } = useSelector((state) => state.data);
  const singleUser = users.filter((user) => user.id === userId);
  return (
    <div className="fixed  top-0 flex items-center justify-center w-full  min-h-screen right-0 ">
      <div
        onClick={() => setUserModal(false)}
        className="bg-black absolute opacity-40 w-full h-full"
      />
      <div className="bg-white p-8  flex text-black flex-col items-center  h-full z-[999]  rounded-lg min-w-64">
        <h1 className="text-xl z-[999]  text-black">{singleUser[0].name}</h1>
        <h3>{singleUser[0].email}</h3>
        <p>{singleUser[0].age}</p>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default UserModal;
