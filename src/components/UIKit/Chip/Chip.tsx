import { FC } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";

interface IChipProps {
  iconKey: string;
  title: string;
  value: number;
}

const Chip: FC<IChipProps> = ({ iconKey, title, value }) => {
  const ChipIcon = Icon[iconKey as IconKeyType];

  return (
    <div className="inline-flex text-black gap-x-2 items-center px-[18px] py-3 bg-grey rounded-full">
      {ChipIcon && (
        <ChipIcon
          width={20}
          height={20}
        />
      )}

      <span className="label">
        {value !== 1 && value} {title}
      </span>
    </div>
  );
};

export default Chip;
