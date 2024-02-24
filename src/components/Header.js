import React from "react";
import { LOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  //const user = userSelector;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // an error happed
        navigate("/error");
      });
  };

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="flex p-2">
        <img
          className="w-11 h-11"
          alt="usericon"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign)
        </button>
      </div>
    </div>
  );
}

export default Header;
