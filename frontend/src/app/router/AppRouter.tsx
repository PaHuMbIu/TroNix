import { Suspense } from "react";
import { RouterProvider } from "react-router";

import { router } from "./router";

export const AppRouter = () => {
  return (
    <Suspense fallback={"Загрузка..."}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
