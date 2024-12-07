import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import RootLayout from "../RootLayout/RootLayout";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "../Pages/AllCampaigns";
import AddNewCampaigns from "../Pages/AddNewCampaigns";
import MyCampaigns from "../Pages/MyCampaigns";
import MyDonations from "../Pages/MyDonations";
import Details from "../Pages/Details";

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
        loader: () => fetch("http://localhost:5000"),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch("http://localhost:5000/allCampaigns"),
      },
      {
        path: "/addnewcampaigns",
        element: (
          <PrivateRoute>
            <AddNewCampaigns></AddNewCampaigns>
          </PrivateRoute>
        ),
        // element: <AddNewCampaigns></AddNewCampaigns>,
      },
      {
        path: "/mycampaigns",
        element: (
          <PrivateRoute>
            <MyCampaigns></MyCampaigns>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/myCampaigns"),
        // element: <MyCampaigns></MyCampaigns>,
      },
      {
        path: "/mydonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
        // element: <MyDonations></MyDonations>,
      },
    ],
  },
]);
export default Router;
