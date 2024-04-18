import Chip from "components/UIKit/Chip";
import { FC } from "react";
import { EquipmentOption } from "utils/getOptionList";

interface IChipListProps {
  options: EquipmentOption[];
}

const ChipList: FC<IChipListProps> = ({ options }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {options.map(({ key, value }) =>
        value ? (
          <li key={key}>
            <Chip
              iconKey={key}
              title={key}
              value={value}
            />
          </li>
        ) : null
      )}
    </ul>
  );
};

export default ChipList;
