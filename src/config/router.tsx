// import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// const HomePage = lazy(() => import("./pages/HomePage"));
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
        element: <div>Home page</div>,
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
