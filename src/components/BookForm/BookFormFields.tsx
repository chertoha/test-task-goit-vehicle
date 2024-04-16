import { SessionStorage } from "services/storage";
import { BookFormValues } from "./BookForm";
import { FC, useEffect } from "react";
import { useFormikContext } from "formik";
import InputField from "components/UIKit/InputField";
import AreaField from "components/UIKit/AreaField";
import DateRangePicker from "components/UIKit/DateRangePicker";

interface IBookFormFieldsProps {
  session: SessionStorage<BookFormValues>;
}

const BookFormFields: FC<IBookFormFieldsProps> = ({ session }) => {
  const { values, handleSubmit } = useFormikContext<BookFormValues>();

  useEffect(() => {
    session.set(values);
  }, [values, session]);

  return (
    <form
      className="mt-6"
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

      <button
        type="submit"
        className="button-primary mt-10 px-[60px]"
      >
        Send
      </button>
    </form>
  );
};

export default BookFormFields;
