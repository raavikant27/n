import React, { useEffect } from "react";
import Login from "./Login";

import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // we create a routing here
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // caal the api// for
  // why we use useeffect beacuse i want to stepup only ones time.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // if user call apply first time call sign nd sign up all will store in here
      if (user) {
        const { uid, email, displayName } = user;
        // put up into the store.
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // if useer will loged in i just navigate him
       // navigate("/browse");
      } else {
        //if user sign out  then i want to dispatch another action then we call another dispatch.
        dispatch(removeUser());
        // if user sign out
       // navigate("/browse");
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
