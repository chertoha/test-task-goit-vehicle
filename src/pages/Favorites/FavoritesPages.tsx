import Favorites from "components/Favorites";
import { Helmet } from "react-helmet-async";

const FavoritesPages = () => {
  return (
    <>
      <Helmet>
        <title>Favorite vehicles</title>
      </Helmet>
      <Favorites />
    </>
  );
};

export default FavoritesPages;
