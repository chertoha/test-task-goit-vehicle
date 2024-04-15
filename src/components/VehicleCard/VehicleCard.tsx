import { FC } from "react";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import ReviewsLabel from "components/UIKit/ReviewsLabel";
import LocationLabel from "components/UIKit/LocationLabel";
import Chip from "components/UIKit/Chip";
import ShowMoreButton from "components/UIKit/ShowMoreButton";

interface IVehicleCardProps {
  //...
}

const VehicleCard: FC<IVehicleCardProps> = () => {
  return (
    <div className="p-6 flex gap-x-6 border border-black/20 rounded-[20px]">
      <div className="shrink-0 w-[290px] h-[310px] overflow-hidden rounded-[10px]">
        <img className="w-full h-full bg-cover" />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between ">
          <h2 className="heading-1">Mavericks</h2>
          <p className="heading-1 flex items-center gap-x-[10px]">
            €{(8000).toFixed(2)}{" "}
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
              rate={4.4}
              count={2}
            />
          </div>

          <LocationLabel location="Kyiv, Ukraine" />
        </div>

        <p className="trim-text-one-row mt-6 w-[525px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere
          nemo architecto quisquam culpa voluptatibus suscipit quis, dolore ea
          laboriosam distinctio hic! Quae, voluptas doloremque excepturi odio
          quos quas dolor.
        </p>

        <div className="mt-6">
          <ul className="flex flex-wrap gap-2 ">
            <li>
              <Chip
                iconKey="adults"
                title="adults"
                value={2}
              />
            </li>

            <li>
              <Chip
                iconKey="transmission"
                title="Automatic"
                value={1}
              />
            </li>

            <li>
              <Chip
                iconKey="petrol"
                title="petrol"
                value={1}
              />
            </li>

            <li>
              <Chip
                iconKey="kitchen"
                title="kitchen"
                value={1}
              />
            </li>

            <li>
              <Chip
                iconKey="beds"
                title="beds"
                value={1}
              />
            </li>

            <li>
              <Chip
                iconKey="airConditioner"
                title="AC"
                value={1}
              />
            </li>
          </ul>
        </div>

        <div className="mt-6 w-[166px]">
          <ShowMoreButton title="Show more" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
