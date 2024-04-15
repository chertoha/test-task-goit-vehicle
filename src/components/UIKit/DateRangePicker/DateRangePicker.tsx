// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FC, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { uk } from "date-fns/locale/uk";
// import { useFormikContext } from "formik";
// import { SearchFilterValues } from "../SearchFilterButton/FilterBox";

import { FC } from "react";

interface IDateRangePickerProps {
  name: string;
}

const DateRangePicker: FC<IDateRangePickerProps> = () => {
  return <div>DateRangePicker</div>;
};

export default DateRangePicker;

// registerLocale("uk", uk);
// interface IDateRangePickerProps {
//   name: string;
// }

// const DateRangePicker: FC<IDateRangePickerProps> = ({ name: fieldName }) => {
//   const { setFieldValue, values } = useFormikContext<SearchFilterValues>();

//   const clear = () => {
//     setFieldValue(fieldName, [null, null]);
//   };

//   const onChange = (dates: [Date | null, Date | null]) => {
//     setFieldValue(fieldName, dates);
//   };

//   return (
//     <div className="relative">
//       <DatePicker
//         className="body-2 cursor-pointer rounded border border-disabled px-4 py-[10px] outline-none"
//         selected={values.dateRange[0]}
//         onChange={onChange}
//         startDate={values.dateRange[0]}
//         endDate={values.dateRange[1]}
//         selectsRange
//         locale={uk}
//         placeholderText="Оберіть період"
//         maxDate={new Date()}
//         dateFormat="dd.MM.yyyy"
//       />

//       <button
//         type="button"
//         onClick={clear}
//         className="link link-effects absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full text-dark"
//       >
//         <IoCloseSharp
//           className=""
//           size={24}
//         />
//       </button>
//     </div>
//   );
// };

// export default DateRangePicker;
