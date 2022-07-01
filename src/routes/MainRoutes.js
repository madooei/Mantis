import { lazy } from "react";
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));
const SamplePage = Loadable(lazy(() => import("pages/demos/SamplePage")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
