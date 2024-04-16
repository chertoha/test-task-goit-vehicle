import { ChangeEvent, FC, useState } from "react";
import { IconValueType } from "../Icon/Icon";
import { Field, useField, useFormikContext } from "formik";

interface IInputFieldProps {
  type: "text" | "email";
  IconStart?: IconValueType;
  IconEnd?: IconValueType;
  placeholder: string;
  name: string;
}

const InputField: FC<IInputFieldProps> = ({
  type,
  IconStart,
  IconEnd,
  placeholder,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [field, { error, touched }] = useField(props);
  const { handleBlur } = useFormikContext();

  return (
    <label className="block relative">
      <Field
        type={type}
        placeholder={placeholder}
        className={`input-field ${IconStart && "pl-[44px]"} ${
          IconEnd && "pr-[44px]"
        } `}
        {...field}
        onFocus={() => setIsFocused(true)}
        onBlur={(e: ChangeEvent<HTMLInputElement>) => {
          handleBlur(e), setIsFocused(false);
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

      {error && touched ? (
        <span className="absolute  bottom-1 left-3 block text-[10px] leading-[1] text-accent">
          *{error}
        </span>
      ) : null}
    </label>
  );
};

export default InputField;
