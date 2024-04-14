import { FC } from "react";
// import { ReactComponent as AdultsIcon } from "../../../assets/adults.svg";
import { ReactComponent as AdultsIcon } from "/public/images/icons/equipment/toilet.svg";

interface IIconProps {
  [key: string]: unknown;
}

export const Icon: FC<IIconProps> = props => {
  return (
    <div>
      <AdultsIcon />
    </div>
  );
};
