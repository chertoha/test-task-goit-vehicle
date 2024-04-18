import { VehicleReview } from "types/entities";
import VehicleReviewCard from "./VehicleReviewCard";
import { FC } from "react";
import { nanoid } from "nanoid";

interface IVehicleReviewsProps {
  reviews: VehicleReview[];
}

const VehicleReviews: FC<IVehicleReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <ul className="space-y-6">
        {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li key={nanoid()}>
            <VehicleReviewCard
              author={reviewer_name}
              rating={reviewer_rating}
              text={comment}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleReviews;
