import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
    errorElement: <ErrorPage></ErrorPage>,
    // errorElement: <ErrorPage />,
  },
]);
export default Router;
