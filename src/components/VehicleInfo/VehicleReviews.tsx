import VehicleReviewCard from "./VehicleReviewCard";
import { nanoid } from "nanoid";
import { useVehicleDataContext } from "hooks/useVehicleDataContext";

const VehicleReviews = () => {
  const { reviews } = useVehicleDataContext();
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
