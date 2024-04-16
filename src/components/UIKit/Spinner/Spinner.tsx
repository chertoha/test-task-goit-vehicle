import { FC } from "react";
import { ClipLoader } from "react-spinners";

interface ISpinnerProps {
  size: number;
}

const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return (
    <span className="text-accent">
      <ClipLoader
        color="currentColor"
        size={size}
      />
    </span>
  );
};

export default Spinner;
