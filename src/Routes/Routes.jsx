// import {createBrowserRouter} from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
// import Apartment from "../Pages/Home/Apartment/Apartment";
// import Login from "../Pages/Login/Login";
// import SignUp from "../Pages/SignUp/SignUp";

// export  const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main></Main>,
//       children:[
//         {
//             path:'/',
//             element:<Home></Home>
//         },
//         {
//           path:'/apartment',
//           element:<Apartment></Apartment>
//         },

//       ],
//       {
//         path:'/login',
//         element:<Login></Login>
//       },
//       {
//         path:'/signUP',
//         element:<SignUp></SignUp>
//       }
//     },
//   ]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Home/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <PrivateRoute><Apartment></Apartment></PrivateRoute>,
      },
      {
        path:"/room/:id",
        element:<RoomDetails></RoomDetails>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
