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
import MyCart from "../Components/MyCart/MyCart";
import AdminRoutes from "./AdminRoutes";
import MemberRoute from "./MemberRoute";

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
        path: "/room/:id",
        element: <PrivateRoute>
          <RoomDetails></RoomDetails>
        </PrivateRoute>
      },
      {
        path: 'myCart',
        element: <MyCart></MyCart>
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
    path: "/dashboard",
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,

    children: [
      {
        index: true,
        element: <PrivateRoute>
          <Statistics></Statistics>
        </PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: "announcement",
        element: <PrivateRoute>
          <Announcement></Announcement>
        </PrivateRoute>
      },
      {
        path: "manage",
        element: <PrivateRoute>
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        </PrivateRoute>
      },
      {
        path: "adminProfile",
        element: <PrivateRoute>
          <AdminRoutes>
            <AdminProfile></AdminProfile>
          </AdminRoutes>
        </PrivateRoute>
      },
      {
        path: "makeAnnounce",
        element: <PrivateRoute>
          <AdminRoutes>
            <MakeAnnouce></MakeAnnouce>
          </AdminRoutes>
        </PrivateRoute>
      },

      {
        path: 'request',
        element: <PrivateRoute>
          <AdminRoutes>
            <Agrement></Agrement>
          </AdminRoutes>
        </PrivateRoute>
      },
      // member routes
      {
        path: 'makePayment',
        element: <PrivateRoute>
          <MemberRoute>
            <MakePayment></MakePayment>
          </MemberRoute>
        </PrivateRoute>
      },
      {
        path: 'paymentHistory',
        element: <PrivateRoute>
          <MemberRoute>
            <PaymentHistory></PaymentHistory>
          </MemberRoute>
        </PrivateRoute>
      },
    ]
  }
]);
