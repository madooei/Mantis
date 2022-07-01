import { lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";
import ReactBigCalendarDemo from "../pages/demos/ReactBigCalendarDemo";
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));
const SamplePage = Loadable(lazy(() => import("../pages/demos/SamplePage")));
const ReactQueryDemo = Loadable(
  lazy(() => import("../pages/demos/ReactQueryDemo"))
);

export const MainRoutes = {
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
    {
      path: "react-query",
      element: <ReactQueryDemo />,
    },
    {
      path: "big-cal",
      element: <ReactBigCalendarDemo />,
    },
  ],
};
