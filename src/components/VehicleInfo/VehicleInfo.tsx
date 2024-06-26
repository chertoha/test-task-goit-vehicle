import LocationLabel from "components/UIKit/LocationLabel";
import ReviewsLabel from "components/UIKit/ReviewsLabel";
import VehicleInfoDetails from "./VehicleInfoDetails";
import { useVehicleDataContext } from "hooks/useVehicleDataContext";

const VehicleInfo = () => {
  const { name, reviews, rating, location, price, gallery, description } =
    useVehicleDataContext();
  return (
    <div className="scroll-bar overflow-y-auto w-full pr-2 md:pr-4 max-md:pt-4">
      <h2 className="heading-1 ">{name}</h2>
      <div className="flex gap-x-4 mt-2 max-md:flex-col max-md:gap-y-2">
        <ReviewsLabel
          count={reviews.length}
          rate={rating}
        />
        <LocationLabel location={location} />
      </div>

      <p className="heading-1 mt-4">€{price.toFixed(2)}</p>

      <ul className="grid grid-cols-1 md:grid-cols-1   xl:grid-cols-3 gap-x-4 mt-6 max-xl:space-y-4">
        {gallery.map((src, i) => (
          <li key={src}>
            <div className="h-[310px] rounded-[10px] overflow-hidden ">
              <img
                src={src}
                alt={`${name}-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="body-1 text-dark mt-6">{description}</p>

      <div className="mt-[44px]">
        <VehicleInfoDetails />
      </div>
    </div>
  );
};

export default VehicleInfo;
