import { FC } from "react";
import { ReactComponent as LocationIcon } from "assets/icons/location.svg";

interface ILocationLabelProps {
  location: string;
}

const LocationLabel: FC<ILocationLabelProps> = ({ location }) => {
  return (
    <p className="flex items-center gap-x-1">
      <LocationIcon
        width={16}
        height={16}
      />
      {location}
    </p>
  );
};

export default LocationLabel;
