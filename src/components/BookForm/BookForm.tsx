import { Formik } from "formik";
import { bookFormSchema } from "utils/validation/validationSchemas";
import { FormikHelpers as FormikActions } from "formik";
import { SessionStorage } from "services/storage";
import BookFormFields from "./BookFormFields";

export type BookFormValues = {
  name: string;
  email: string;
  dates: [Date | null, Date | null];
  comment: string;
};

const initialValues: BookFormValues = {
  name: "",
  email: "",
  dates: [null, null],
  comment: "",
};

const session = new SessionStorage<BookFormValues>("book_form_fields");

const BookForm = () => {
  const onSubmitHandler = async (
    values: BookFormValues,
    { resetForm }: FormikActions<BookFormValues>
  ) => {
    console.log(values);

    resetForm({ values: initialValues });
  };

  return (
    <div className="p-6 border border-black/20 rounded-[10px]">
      <h3 className="heading-2">Book your campervan now</h3>
      <p className="body-1 mt-2 text-dark">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={session.get() || initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={bookFormSchema}
      >
        {() => <BookFormFields session={session} />}
      </Formik>
    </div>
  );
};

export default BookForm;
