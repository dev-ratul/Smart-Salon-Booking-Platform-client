import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import DashboardRoot from "../Pages/Dashboard/DashboardLayout/DashboardRoot";
import UserTransactionHistory from "../Pages/Dashboard/UserTransactionHistory/UserTransactionHistory";
import ChicBlog from "../Components/ChicBlog/ChicBlog";

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
      }
    ]
  }
]);
