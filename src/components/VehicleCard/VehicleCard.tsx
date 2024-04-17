import { FC } from "react";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import ReviewsLabel from "components/UIKit/ReviewsLabel";
import LocationLabel from "components/UIKit/LocationLabel";
import Chip from "components/UIKit/Chip";
import ShowMoreButton from "components/UIKit/ShowMoreButton";
import { Vehicle } from "types/entities";
import { getOptionList } from "utils/getOptionList";
import ChipList from "components/ChipList";

interface IVehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: FC<IVehicleCardProps> = ({ vehicle }) => {
  // const commonOptions = { ...vehicle, ...vehicle.details };

  // type CommonOptionsKey = keyof typeof commonOptions;

  // type Option = {
  //   key: string;
  //   value: number | string;
  // };

  // const options: Option[] = [];

  // Object.keys(commonOptions).forEach(key => {
  //   if (Icon[key as IconKeyType]) {
  //     options.push({
  //       key,
  //       value: commonOptions[key as CommonOptionsKey] as string | number,
  //     });
  //   }
  // });

  const options = getOptionList(vehicle);

  // console.log(commonOptions);
  console.log(options);

  return (
    <div className="p-6 flex gap-x-6 border border-black/20 rounded-[20px]">
      <div className="shrink-0 w-[290px] h-[310px] overflow-hidden rounded-[10px]">
        <img className="w-full h-full bg-cover" />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between ">
          <h2 className="heading-1">{vehicle.name}</h2>
          <p className="heading-1 flex items-center gap-x-[10px]">
            €{vehicle.price.toFixed(2)}
            <button
              type="button"
              className="flex-center"
            >
              <HeartIcon
                width={24}
                height={24}
              />
            </button>
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

        <p className="trim-text-one-row mt-6 w-[525px]">
          {vehicle.description}
        </p>

        <div className="mt-6">
          <ChipList options={options} />
          {/* <ul className="flex flex-wrap gap-2 ">
            {options.map(({ key, value }) => (
              <li key={key}>
                <Chip
                  iconKey={key}
                  title={key}
                  value={value}
                />
              </li>
            ))}
          </ul> */}
        </div>

        <div className="mt-6 w-[166px]">
          <ShowMoreButton title="Show more" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
