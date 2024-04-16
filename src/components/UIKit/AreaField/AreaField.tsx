import { useField } from "formik";
import { FC } from "react";

interface IAreaFieldProps {
  placeholder: string;
  name: string;
}

const AreaField: FC<IAreaFieldProps> = ({ placeholder, ...props }) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className="relative">
      <textarea
        className="input-field block h-[114px] overflow-y-auto"
        placeholder={placeholder}
        {...field}
      ></textarea>

      {error && touched ? (
        <span className="absolute  bottom-1 left-3 block text-[10px] leading-[1] text-accent">
          *{error}
        </span>
      ) : null}
    </div>
  );
};

export default AreaField;
