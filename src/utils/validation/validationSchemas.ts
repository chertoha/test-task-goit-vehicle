import * as Yup from "yup";
import { emailRegexp } from "./validationPatterns";

export const bookFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must have not less than 3 symbols")
    .max(50, "Name must have not more than 50 symbols")
    .required("Please, write your name")
    .trim(),

  email: Yup.string()
    .matches(emailRegexp, {
      message: "Not valid email!",
    })
    .max(320, "Email must have not more than 320 symbols")
    .required("Please, write your email"),

  dates: Yup.tuple([
    Yup.date().nonNullable("Select start date range. "),
    Yup.date().nonNullable("Select select end date range"),
  ]).required("Please select date range"),
});
