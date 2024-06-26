import { FC } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";

interface IChipProps {
  iconKey: string;
  value: number | string;
}

const optionsFilter = ["gas", "water"];

const Chip: FC<IChipProps> = ({ iconKey, value }) => {
  const ChipIcon = Icon[iconKey as IconKeyType].icon;
  const title = Icon[iconKey as IconKeyType].title;

  return (
    value !== 0 && (
      <div className="inline-flex text-black gap-x-2 items-center px-[18px] py-3 bg-grey rounded-full">
        {ChipIcon && (
          <ChipIcon
            width={20}
            height={20}
          />
        )}

        {typeof value === "number" ? (
          <span className="label">
            {value !== 1 && value} <span className="capitalize">{title}</span>
          </span>
        ) : (
          <span className="label">
            <span className="capitalize">{optionsFilter.includes(iconKey) ? title : value}</span>
          </span>
        )}
      </div>
    )
  );
};

export default Chip;
