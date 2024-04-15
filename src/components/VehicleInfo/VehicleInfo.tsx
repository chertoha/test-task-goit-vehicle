import LocationLabel from "components/UIKit/LocationLabel";
import ReviewsLabel from "components/UIKit/ReviewsLabel";
import { FC } from "react";
import VehicleInfoDetails from "./VehicleInfoDetails";

interface IVehicleInfoProps {
  //...
}

const VehicleInfo: FC<IVehicleInfoProps> = () => {
  return (
    <div className="overflow-y-auto w-full">
      <h2 className="heading-1 ">Mavericks</h2>
      <div className="flex gap-x-4 mt-2">
        <ReviewsLabel
          count={2}
          rate={4.4}
        />
        <LocationLabel location="Kyiv, Ukraine" />
      </div>

      <p className="heading-1 mt-4">€{(8000).toFixed(2)}</p>

      <ul className="grid grid-cols-3 gap-x-4 mt-6">
        <li>
          <div className="h-[310px] rounded-[10px] overflow-hidden">
            <img className="w-full h-full bg-cover" />
          </div>
        </li>
        <li>
          <div className="h-[310px] rounded-[10px] overflow-hidden">
            <img className="w-full h-full bg-cover" />
          </div>
        </li>
        <li>
          <div className="h-[310px] rounded-[10px] overflow-hidden">
            <img className="w-full h-full bg-cover" />
          </div>
        </li>
      </ul>

      <p className="body-1 text-dark mt-6">
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>

      <div className="mt-[44px]">
        <VehicleInfoDetails />
      </div>
    </div>
  );
};

export default VehicleInfo;
