import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Software from "../Pages/Software";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

/** named export **/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Apps',
        element: <Software />,
      },
    ]
  },
  // {
  //   path: '*',
  //   element: <ErrorPage />
  // }


])

export default router
