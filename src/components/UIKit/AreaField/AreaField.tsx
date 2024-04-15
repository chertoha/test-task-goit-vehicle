import { FC } from "react";

interface IAreaFieldProps {
  placeholder: string;
}

const AreaField: FC<IAreaFieldProps> = ({ placeholder }) => {
  return (
    <textarea
      className="input-field block h-[114px] overflow-y-auto"
      placeholder={placeholder}
    ></textarea>
  );
};

export default AreaField;
