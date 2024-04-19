import { FC } from "react";
import { Icon, IconKeyType } from "../Icon/Icon";
import { Field, useField, useFormikContext } from "formik";
import { FilterValues } from "types/formValues";

interface IFilterCheckboxProps {
  name: string;
  iconKey: string;
}

const FilterCheckbox: FC<IFilterCheckboxProps> = ({ iconKey, ...props }) => {
  const [field] = useField(props);
  const { values } = useFormikContext<FilterValues>();

  const LabelIcon = Icon[iconKey as IconKeyType].icon;
  const title = Icon[iconKey as IconKeyType].title;

  const isChecked = values.options.includes(iconKey);
  return (
    <label
      className={`label transition-default cursor-pointer flex flex-col h-[95px] border-2 rounded-[10px] justify-center items-center gap-y-2 ${
        isChecked ? "border-accent" : "border-black/20"
      }`}
    >
      <Field
        hidden
        {...field}
        value={iconKey}
        type="checkbox"
        checked={isChecked}
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
