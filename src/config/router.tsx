// import React from "react";
// import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

// const HomePage = React.lazy(() => import("./pages/HomePage"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
// const ExercisePage = lazy(() => import("./pages/ExercisePage"));

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  FAVORITES: "/favorites",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.CATALOG,
        element: <div>Catalog page</div>,
      },
      {
        path: ROUTES.FAVORITES,
        element: <div>Favorites page</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/test-task-goit-vehicle",
});

export default router;
