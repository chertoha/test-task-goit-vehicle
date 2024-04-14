import { FC } from "react";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

interface IRatingBarProps {
  value: number;
}

const RatingBar: FC<IRatingBarProps> = ({ value }) => {
  if (value > 5 || value < 0) throw new Error("value must be between 0 and 5");

  const collection = Array.from(Array(5));
  const flooredValue = Math.floor(value);
  return (
    <div className="flex gap-x-1">
      {collection.map((_, i) => (
        <span
          className={`${i + 1 <= flooredValue ? "text-yellow" : "text-grey"}`}
        >
          <StarIcon
            width={16}
            height={16}
          />
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
