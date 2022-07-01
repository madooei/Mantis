import { useRoutes } from "react-router-dom";
import { LoginRoutes } from "./LoginRoutes";
import { MainRoutes } from "./MainRoutes";

function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoutes]);
}

export default ThemeRoutes;
