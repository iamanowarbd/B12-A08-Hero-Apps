import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Software from "../Pages/Software";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Install from "../Pages/Install";
import AllAppsData from "../../public/AllAppsData.json";
import SoftwareDetails from "../Pages/SoftwareDetails";


/** named export **/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading..</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/AllAppsData.json'),
      },
      {
        path: '/Apps',
        element: <Software />,
        loader: () => fetch('/AllAppsData.json'),
      },
      {
        path: '/Installation',
        element: <Install />,
      },
      {
        path: '/Apps/:id',
        element: <SoftwareDetails />,
        loader: () => fetch('/AllAppsData.json'),
      },
    ]
  },
  // {
  //   path: '*',
  //   element: <ErrorPage />
  // }


])

export default router
