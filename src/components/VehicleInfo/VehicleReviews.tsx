import VehicleReviewCard from "./VehicleReviewCard";

const VehicleReviews = () => {
  return (
    <div>
      <ul className="space-y-6">
        <li>
          <VehicleReviewCard
            author="Alice"
            rating={5}
            text="The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic."
          />
        </li>

        <li>
          <VehicleReviewCard
            author="Bob"
            rating={3.2}
            text="A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred."
          />
        </li>
      </ul>
    </div>
  );
};

export default VehicleReviews;
