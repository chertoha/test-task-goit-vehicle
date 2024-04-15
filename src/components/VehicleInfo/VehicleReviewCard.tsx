import RatingBar from "components/UIKit/RatingBar";
import { FC } from "react";

interface IVehicleReviewCardProps {
  author: string;
  text: string;
  rating: number;
}

const VehicleReviewCard: FC<IVehicleReviewCardProps> = ({
  author,
  text,
  rating,
}) => {
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <p className="heading-1 flex-center size-[60px] rounded-full bg-grey text-accent capitalize">
          {author[0]}
        </p>

        <div className="">
          <p className="heading-3 mb-1">{author}</p>
          <RatingBar value={rating} />
        </div>
      </div>

      <p className="body-1 mt-4 text-dark">{text}</p>
    </div>
  );
};
export default VehicleReviewCard;
