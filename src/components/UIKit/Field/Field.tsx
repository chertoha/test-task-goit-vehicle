import { FC, useState } from "react";
import { IconValueType } from "../Icon/Icon";

interface IFieldProps {
  type: "text" | "email";
  IconStart?: IconValueType;
  IconEnd?: IconValueType;
  placeholder: string;
}

const Field: FC<IFieldProps> = ({ type, IconStart, IconEnd, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="block relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`input-field
        ${IconStart && "pl-[44px]"}
        ${IconEnd && "pr-[44px]"}
        `}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      {IconStart && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 left-[18px]
        ${isFocused ? "text-black" : "text-black/60"}
        `}
        >
          <IconStart
            width={20}
            height={20}
          />
        </span>
      )}

      {IconEnd && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 right-[18px]
        ${isFocused ? "text-black" : "text-black/60"}
        `}
        >
          <IconEnd
            width={20}
            height={20}
          />
        </span>
      )}
    </label>
  );
};

export default Field;
