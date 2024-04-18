import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { Vehicle } from "types/entities";
import { selectFavorites } from "../../redux/favorites/selectors";

interface IFavoriteButtonProps {
  vehicle: Vehicle;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({ vehicle }) => {
  const favorites = useSelector(selectFavorites);

  const [isFavorite, setIsFavorite] = useState<boolean>(() =>
    favorites.some(({ id }) => vehicle.id === id)
  );

  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite(vehicle.id));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(vehicle));
      setIsFavorite(true);
    }
  };

  return (
    <button
      type="button"
      className={`flex-center ${isFavorite ? "text-accent" : "text-black"}`}
      onClick={onClickHandler}
    >
      <HeartIcon
        width={24}
        height={24}
        className={`${isFavorite ? "fill-accent" : "fill-none"}`}
      />
    </button>
  );
};
export default FavoriteButton;
