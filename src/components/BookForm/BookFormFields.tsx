import InputField from "components/UIKit/InputField";
import AreaField from "components/UIKit/AreaField";
import DateRangePicker from "components/UIKit/DateRangePicker";
import Spinner from "components/UIKit/Spinner";
import { SessionStorage } from "services/storage";
import { FC, useEffect } from "react";
import { useFormikContext } from "formik";
import { BookFormValues } from "types/formValues";

interface IBookFormFieldsProps {
  session: SessionStorage<BookFormValues>;
}

const BookFormFields: FC<IBookFormFieldsProps> = ({ session }) => {
  const { values, handleSubmit, isSubmitting } = useFormikContext<BookFormValues>();

  useEffect(() => {
    session.set(values);
  }, [values, session]);

  return (
    <div className="relative">
      <form
        className={`mt-6  ${isSubmitting && "blur-sm"}`}
        onSubmit={handleSubmit}
      >
        <div className="space-y-[14px]">
          <InputField
            type="text"
            placeholder="Name"
            name="name"
          />

          <InputField
            type="email"
            placeholder="Email"
            name="email"
          />

          <DateRangePicker name="dates" />

          <AreaField
            placeholder="Comment"
            name="comment"
          />
        </div>

        <div className="max-md:flex max-md:justify-center">
          <button
            type="submit"
            className="button-primary mt-10 px-[60px]"
          >
            Send
          </button>
        </div>
      </form>

      {isSubmitting && (
        <div className="flex-center absolute z-10  top-0 left-0 w-full h-full bg-transparent">
          <Spinner size={70} />
        </div>
      )}
    </div>
  );
};

export default BookFormFields;
