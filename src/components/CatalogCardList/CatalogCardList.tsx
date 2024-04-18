import VehicleCard from "components/VehicleCard";
import { FC } from "react";
import { Vehicle } from "types/entities";

interface ICatalogCardListProps {
  list: Vehicle[];
}

const CatalogCardList: FC<ICatalogCardListProps> = ({ list }) => {
  return (
    <ul className="space-y-6">
      {list.map(vehicle => (
        <li key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
};
export default CatalogCardList;
