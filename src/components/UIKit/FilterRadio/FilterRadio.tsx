import { FC } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";
import { useField } from "formik";

interface IFilterRadioProps {
  name: string;
  iconKey: string;
  title: string;
}

const FilterRadio: FC<IFilterRadioProps> = ({ iconKey, title, ...props }) => {
  const [field, { value }] = useField(props);

  const LabelIcon = Icon[iconKey as IconKeyType];

  return (
    <label
      className={`label transition-default cursor-pointer flex flex-col md:w-[112px] h-[95px] border   rounded-[10px] justify-center items-center gap-y-2 ${
        value === iconKey ? "border-accent" : "border-black/20"
      } `}
    >
      <input
        hidden
        type="radio"
        {...field}
        value={iconKey}
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
