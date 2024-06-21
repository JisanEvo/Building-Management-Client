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
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import Announcement from "../Pages/Dashboard/Announcement";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUser";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import MakeAnnouce from "../Pages/Dashboard/Admin/MakeAnnouce";
import MakePayment from "../Pages/Dashboard/Sidebar/Menu/MemberMenu/MakePayment";
import PaymentHistory from "../Pages/Dashboard/Sidebar/Menu/MemberMenu/PaymentHistory";
import Agrement from "../Pages/Dashboard/Sidebar/Menu/AdminMenu/Agrement";

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
        element:<PrivateRoute>
          <RoomDetails></RoomDetails>
        </PrivateRoute>
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

  {
 path:"/dashboard",
 element:<PrivateRoute>
  <Dashboard></Dashboard>
 </PrivateRoute>,

 children:[
  {
    index:true,
    element:<PrivateRoute>
      <Statistics></Statistics>
    </PrivateRoute>
  },
  {
    path:"profile",
    element:<PrivateRoute>
      <MyProfile></MyProfile>
    </PrivateRoute>
  },
  {
    path:"announcement",
    element:<PrivateRoute>
      <Announcement></Announcement>
    </PrivateRoute>
  },
  {
    path:"manage",
    element:<PrivateRoute>
      <ManageUsers></ManageUsers>
    </PrivateRoute>
  },
  {
    path:"adminProfile",
    element:<PrivateRoute>
      <AdminProfile></AdminProfile>
    </PrivateRoute>
  },
  {
    path:"makeAnnounce",
    element:<PrivateRoute>
      <MakeAnnouce></MakeAnnouce>
    </PrivateRoute>
  },
  {
    path:'makePayment',
    element:<PrivateRoute>
      <MakePayment></MakePayment>
    </PrivateRoute>
  },
  {
    path:'paymentHistory',
    element:<PrivateRoute>
      <PaymentHistory></PaymentHistory>
    </PrivateRoute>
  },
  {
    path:'request',
    element:<PrivateRoute>
      <Agrement></Agrement>
    </PrivateRoute>
  }
 ]
  }
]);
