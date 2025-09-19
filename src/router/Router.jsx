import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import DashboardRoot from "../Pages/Dashboard/DashboardLayout/DashboardRoot";
import UserTransactionHistory from "../Pages/Dashboard/UserTransactionHistory/UserTransactionHistory";
import SaloonOnboarding from "../Pages/Dashboard/SaloonOnboarding/SaloonOnboarding";
import BangladeshMap from "../Components/OurMap/OurMap";
import ChicBlog from "../Components/Chick/ChicBlog";
import Saloon from "../Components/Saloon/Saloon";
import SalonDetails from "../Components/Saloon/SalonDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/chic-blog',
        Component: ChicBlog
      },
      {
        path: '/our-map',
        Component: BangladeshMap
      },
      {
        path: '/saloon',
        Component: Saloon
      },
      {
        path: `/saloon/:id`,
        Component: SalonDetails
      }
      
      
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardRoot,
    children: [
      {
        path: '/dashboard/user-transaction-history',
        Component: UserTransactionHistory,
      },
      {
        path: '/dashboard/saloon-onboarding',
        Component: SaloonOnboarding,
      },
      

    ]
  }
]);
