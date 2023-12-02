import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUsers } from "../rtk/crudSlice";
import UserModal from "./UserModal";
import UpdateModal from "./UpdateModal";

const Read = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const [userId, setUserId] = useState();
  useEffect(() => {
    dispatch(readUsers());
  }, []);
  const [userModal, setUserModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      {userModal && <UserModal userId={userId} setUserModal={setUserModal} />}
      {editModal && <UpdateModal userId={userId} setEditModal={setEditModal} />}
      <div>
        <h1>Cards</h1>
        <div className="flex mt-8 flex-col gap-8">
          {users.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col p-8 text-black bg-white"
            >
              <h1 className="font-bold">{item.name}</h1>
              <span>Email: {item.email}</span>
              <span>Age: {item.age}</span>
              <span>Gender: {item.gender}</span>
              <div className="flex items-center mt-5 justify-center gap-3">
                <span
                  onClick={() => [setUserModal(true), setUserId(item.id)]}
                  className="cursor-pointer"
                >
                  View
                </span>
                <span
                  onClick={() => [setEditModal(true), setUserId(item.id)]}
                  className="cursor-pointer"
                >
                  Edit
                </span>
                <span
                  onClick={() => dispatch(deleteUser(item.id))}
                  className="cursor-pointer"
                >
                  Delete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Read;
