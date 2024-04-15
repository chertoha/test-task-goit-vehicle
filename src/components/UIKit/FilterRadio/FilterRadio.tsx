import { FC } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";

interface IFilterRadioProps {
  name: string;
  iconKey: string;
  title: string;
}

const FilterRadio: FC<IFilterRadioProps> = ({ iconKey, title, name }) => {
  const LabelIcon = Icon[iconKey as IconKeyType];

  // const [checked, setChecked] = useState(false);

  return (
    <label
      className={`label transition-default cursor-pointer flex flex-col w-[112px] h-[95px] border   rounded-[10px] justify-center items-center gap-y-2 `}
      // className={`label transition-default cursor-pointer flex flex-col w-[112px] h-[95px] border   rounded-[10px] justify-center items-center gap-y-2 ${
      //   checked ? "border-accent" : "border-black/20"
      // }`}
      // onClick={() => {
      //   setChecked(true);
      // }}
    >
      <input
        hidden
        type="radio"
        name={name}
        value={title}
        // checked={checked}
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

export default FilterRadio;
