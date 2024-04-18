import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { FC } from "react";
import { useFormikContext } from "formik";
import { BookFormValues } from "types/formValues";

interface IDateRangePickerProps {
  name: string;
}

const DateRangePicker: FC<IDateRangePickerProps> = () => {
  const { setFieldValue, values, errors, touched } =
    useFormikContext<BookFormValues>();

  const onChange = (dates: [Date | null, Date | null]) => {
    setFieldValue("dates", dates);
  };

  return (
    <div className="relative">
      <DatePicker
        className="input-field cursor-pointer  outline-none w-full"
        startDate={values.dates[0]}
        endDate={values.dates[1]}
        selectsRange
        placeholderText="Booking date"
        dateFormat="dd.MM.yyyy"
        onChange={onChange}
        minDate={new Date()}
      />

      <span className={`absolute top-1/2 -translate-y-1/2 right-[18px]`}>
        <CalendarIcon
          width={20}
          height={20}
        />
      </span>

      {errors.dates && touched.dates ? (
        <span className="absolute  bottom-1 left-3 block text-[10px] leading-[1] text-accent">
          *{errors.dates}
        </span>
      ) : null}
    </div>
  );
};

export default DateRangePicker;
