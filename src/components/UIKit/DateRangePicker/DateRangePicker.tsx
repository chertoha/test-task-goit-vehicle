import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

import { FC, useState } from "react";

interface IDateRangePickerProps {
  name: string;
}

const DateRangePicker: FC<IDateRangePickerProps> = () => {
  const [values, setValues] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  // const clear = () => {
  //   // setFieldValue(fieldName, [null, null]);
  //   setValues([null, null]);
  // };

  const onChange = (dates: [Date | null, Date | null]) => {
    // setFieldValue(fieldName, dates);
    setValues(dates);
  };
  return (
    <div className="relative">
      <DatePicker
        className="input-field cursor-pointer  outline-none w-full"
        // selected={values.dateRange[0]}
        onChange={onChange}
        startDate={values[0]}
        endDate={values[1]}
        selectsRange
        // locale={uk}
        placeholderText="Booking date"
        // maxDate={new Date()}
        dateFormat="dd.MM.yyyy"
      />

      <span className={`absolute top-1/2 -translate-y-1/2 right-[18px]`}>
        <CalendarIcon
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default DateRangePicker;
