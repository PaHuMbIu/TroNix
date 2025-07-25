import { createBrowserRouter } from "react-router-dom";
import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage.tsx";
import { InitDataPage } from "@/pages/init-data-page/ui/InitDataPage.tsx";
import { LaunchParamsPage } from "@/pages/launch-params-page/ui/LaunchParamsPage.tsx";
import { ThemeParamsPage } from "@/pages/theme-params-page/ui/ThemeParamsPage.tsx";

export const router = createBrowserRouter([
  // TODO Component || element??!
  { path: "/", element: <TONConnectPage /> },
  { path: "/init-data", Component: InitDataPage },
  { path: "/launch", element: <LaunchParamsPage /> },
  { path: "/theme", Component: ThemeParamsPage },
  {
    path: "*",
    element: <div>404 — страница не найдена</div>,
  },
]);
