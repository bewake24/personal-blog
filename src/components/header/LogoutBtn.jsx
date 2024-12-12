import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 bg-blue-500  rounded-md  shadow-lg"
    >
      <span className="hover:transform hover:scale-110 rounded-md font-medium hover:underline text-white">
        Logout
      </span>
    </button>
  );
}

export default LogoutBtn;
