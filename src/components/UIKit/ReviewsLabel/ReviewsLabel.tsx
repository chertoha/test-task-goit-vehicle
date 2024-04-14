import { FC } from "react";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

interface IReviewsLabelProps {
  rate: number;
  count: number;
}

const ReviewsLabel: FC<IReviewsLabelProps> = ({ count, rate }) => {
  return (
    <div className="flex items-center gap-x-1">
      <span className="text-yellow">
        <StarIcon
          width={16}
          height={16}
        />
      </span>

      <span className="body-1 underline">
        {rate}&#40;{count} Reviews&#41;
      </span>
    </div>
  );
};

export default ReviewsLabel;
