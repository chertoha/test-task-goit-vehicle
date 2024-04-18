import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import FavoriteCardList from "components/FavoriteCardList";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container-default">
      <div className="pb-20">
        <h1 className="heading-1 text-4xl mb-4">Your favorites</h1>

        <div className="border-2 border-grey rounded-3xl p-4">
          {favorites.length > 0 ? (
            <FavoriteCardList list={favorites} />
          ) : (
            <p className="heading-2 flex-center py-20">
              You have no favorites yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
