import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import SkillDetails from "../Components/Home/SkillDetails";
import ResetPassword from "../Pages/ResetPassword";
import PageNotFound from "../Pages/PageNotFound";
import SkillNotFound from "../Pages/SkillNotFound";
import { HashLoader } from "react-spinners";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/log-in",
        Component: Login,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/reset-password",
        Component: ResetPassword,
      },
      {
        path: "/skill-details/:id",
        element: (
          <PrivateRoutes>
            <SkillDetails></SkillDetails>
          </PrivateRoutes>
        ),
        errorElement: <SkillNotFound></SkillNotFound>,
        loader: () => fetch("/SkillData.json"),
        hydrateFallbackElement: <HashLoader />,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

export default router;
