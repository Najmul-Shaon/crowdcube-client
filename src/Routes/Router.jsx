import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import RunningCampaigns from "../Components/RunningCampaigns";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <RunningCampaigns></RunningCampaigns>,
        loader: () => fetch("donation.json"),
      },
    ],
  },
]);
export default Router;
