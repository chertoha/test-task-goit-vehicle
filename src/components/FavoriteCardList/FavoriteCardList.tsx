import VehicleCardFavorite from "components/VehicleCard/VehicleCardFavorite";
import { FC } from "react";
import { Vehicle } from "types/entities";

interface IFavoriteCardListProps {
  list: Vehicle[];
}

const FavoriteCardList: FC<IFavoriteCardListProps> = ({ list }) => {
  return (
    <ul className="grid xl:grid-cols-2 grid-cols-1 gap-10">
      {list.map(vehicle => (
        <li
          key={vehicle.id}
          className=""
        >
          <VehicleCardFavorite vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
};
export default FavoriteCardList;
