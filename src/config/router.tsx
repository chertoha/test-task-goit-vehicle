import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import CatalogPage from "pages/CatalogPage";
import HomePage from "pages/HomePage";
import FavoritesPages from "pages/Favorites/FavoritesPages";

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  FAVORITES: "/favorites",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.CATALOG,
        element: <CatalogPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPages />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/test-task-goit-vehicle",
});

export default router;
