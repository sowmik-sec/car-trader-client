import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
]);

export default router;
