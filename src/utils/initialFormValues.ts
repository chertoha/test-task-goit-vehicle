import { BookFormValues, FilterValues } from "types/formValues";

export const initialBookFormValues: BookFormValues = {
  name: "",
  email: "",
  dates: [null, null],
  comment: "",
};

export const initialFilterValues: FilterValues = {
  search: "",
  options: [],
  //   form: "panelTruck",
  form: "",
};
