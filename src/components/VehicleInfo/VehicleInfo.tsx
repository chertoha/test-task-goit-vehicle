import LocationLabel from "components/UIKit/LocationLabel";
import ReviewsLabel from "components/UIKit/ReviewsLabel";
import { FC } from "react";
import VehicleInfoDetails from "./VehicleInfoDetails";
import { Vehicle } from "types/entities";

interface IVehicleInfoProps {
  data: Vehicle;
}

const VehicleInfo: FC<IVehicleInfoProps> = ({ data }) => {
  return (
    <div className="scroll-bar overflow-y-auto w-full pr-4">
      <h2 className="heading-1 ">{data.name}</h2>
      <div className="flex gap-x-4 mt-2">
        <ReviewsLabel
          count={data.reviews.length}
          rate={data.rating}
        />
        <LocationLabel location={data.location} />
      </div>

      <p className="heading-1 mt-4">€{data.price.toFixed(2)}</p>

      <ul className="grid grid-cols-3 gap-x-4 mt-6">
        {data.gallery.map((src, i) => (
          <li key={src}>
            <div className="h-[310px] rounded-[10px] overflow-hidden ">
              <img
                src={src}
                alt={`${data.name}-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="body-1 text-dark mt-6">{data.description}</p>

      <div className="mt-[44px]">
        <VehicleInfoDetails data={data} />
      </div>
    </div>
  );
};

export default VehicleInfo;
