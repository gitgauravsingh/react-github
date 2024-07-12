import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Home-page";
import Aboutpage from "./About-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
  {
    path: "/form",
  },
]);

export default router;
