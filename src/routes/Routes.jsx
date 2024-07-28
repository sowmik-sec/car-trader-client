import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
