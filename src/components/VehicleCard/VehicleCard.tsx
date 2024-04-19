import { FC } from "react";

import ReviewsLabel from "components/UIKit/ReviewsLabel";
import LocationLabel from "components/UIKit/LocationLabel";
import ShowMoreButton from "components/UIKit/ShowMoreButton";
import { Vehicle } from "types/entities";
import { getOptionList } from "utils/getOptionList";
import ChipList from "components/ChipList";
import FavoriteButton from "components/FavoriteButton";

interface IVehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: FC<IVehicleCardProps> = ({ vehicle }) => {
  const options = getOptionList(vehicle);

  return (
    <div className="p-6 flex max-xl:flex-col gap-x-6 border border-black/20 rounded-[20px]">
      <div className="shrink-0 xl:w-[290px] h-[310px] overflow-hidden rounded-[10px]">
        <img
          src={vehicle.gallery[0]}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          width="290"
          height="310"
        />
      </div>

      <div className="w-full max-xl:mt-4">
        <div className="flex items-center justify-between ">
          <h2 className="heading-1">{vehicle.name}</h2>
          <p className="heading-1 flex items-center gap-x-[10px]">
            €{vehicle.price.toFixed(2)}
            <FavoriteButton vehicle={vehicle} />
          </p>
        </div>

        <div className="mt-2 flex items-center">
          <div className="mr-4">
            <ReviewsLabel
              rate={vehicle.rating}
              count={vehicle.reviews.length}
            />
          </div>

          <LocationLabel location={vehicle.location} />
        </div>

        <p className="trim-text-one-row mt-6 xl:w-[525px]">{vehicle.description}</p>

        <div className="mt-6">
          <ChipList options={options} />
        </div>

        <div className="mt-6 w-[166px]">
          <ShowMoreButton
            title="Show more"
            vehicle={vehicle}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
