import { ChangeEvent, FC, useState } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";
import { Field, useField } from "formik";

interface IFilterCheckboxProps {
  name: string;
  iconKey: string;
  title: string;
}

const FilterCheckbox: FC<IFilterCheckboxProps> = ({
  iconKey,
  title,
  ...props
}) => {
  const [field] = useField(props);
  const [isChecked, setIsChecked] = useState(false);

  const LabelIcon = Icon[iconKey as IconKeyType];
  return (
    <label
      className={`label transition-default cursor-pointer flex flex-col h-[95px] border   rounded-[10px] justify-center items-center gap-y-2 ${
        isChecked ? "border-accent" : "border-black/20"
      }`}
    >
      <Field
        hidden
        {...field}
        value={iconKey}
        type="checkbox"
        checked={isChecked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          field.onChange(e);
          setIsChecked(p => !p);
        }}
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
