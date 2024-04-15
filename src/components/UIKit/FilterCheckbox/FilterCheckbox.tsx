import { FC, useState } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";

interface IFilterCheckboxProps {
  name: string;
  iconKey: string;
  title: string;
}

const FilterCheckbox: FC<IFilterCheckboxProps> = ({ iconKey, title, name }) => {
  const LabelIcon = Icon[iconKey as IconKeyType];

  const [checked, setChecked] = useState(false);

  const toggle = () => setChecked(p => !p);

  return (
    <label
      className={`label transition-default cursor-pointer flex flex-col h-[95px] border   rounded-[10px] justify-center items-center gap-y-2 ${
        checked ? "border-accent" : "border-black/20"
      }`}
    >
      <input
        hidden
        type="checkbox"
        name={name}
        value={title}
        checked={checked}
        onChange={toggle}
      />

      {LabelIcon && (
        <LabelIcon
          width={32}
          height={32}
        />
      )}

      <span className="text-center capitalize">{title}</span>
    </label>
  );
};

export default FilterCheckbox;
