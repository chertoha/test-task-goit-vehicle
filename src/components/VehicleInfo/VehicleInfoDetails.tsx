import { FC, useState } from "react";
import VehicleFeatures from "./VehicleFeatures";
import VehicleReviews from "./VehicleReviews";
import BookForm from "../BookForm/BookForm";
import { Vehicle } from "types/entities";

interface IVehicleInfoDetailsProps {
  data: Vehicle;
}

const VehicleInfoDetails: FC<IVehicleInfoDetailsProps> = ({ data }) => {
  const [isFeatures, setIsFeatures] = useState(true);
  const switchToFeatures = () => setIsFeatures(true);
  const switchToReviews = () => setIsFeatures(false);

  return (
    <div className="">
      <ul className="flex gap-x-10 border-b border-black/20 ">
        <li>
          <button
            type="button"
            className={`relative heading-2  pb-6 after:absolute after:left-0 after:bottom-[-3px] after:h-[5px] after:w-full after:bg-accent
            ${isFeatures ? "after:block" : "after:hidden"}`}
            onClick={switchToFeatures}
          >
            Features
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`relative heading-2  pb-6 after:absolute after:left-0 after:bottom-[-3px] after:h-[5px] after:w-full after:bg-accent
            ${!isFeatures ? "after:block" : "after:hidden"}`}
            onClick={switchToReviews}
          >
            Reviews
          </button>
        </li>
      </ul>

      <div className="flex gap-x-6 mt-[44px]">
        <div className="w-full">
          {isFeatures ? (
            <VehicleFeatures data={data} />
          ) : (
            <VehicleReviews reviews={data.reviews} />
          )}
        </div>
        <div className="w-full ">
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default VehicleInfoDetails;
