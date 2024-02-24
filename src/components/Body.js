import React, { useEffect } from "react";
import Login from "./Login";

import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  //const dispatch = useDispatch();
  // const navigate = useNavigate();

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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
