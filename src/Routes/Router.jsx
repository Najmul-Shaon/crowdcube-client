import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RunningCampaigns from "../Components/RunningCampaigns";
import RootLayout from "../RootLayout/RootLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    // element: <Home></Home>,
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("donation.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default Router;
