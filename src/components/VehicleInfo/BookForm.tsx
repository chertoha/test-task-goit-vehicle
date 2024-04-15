import Field from "components/UIKit/InputField";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import AreaField from "components/UIKit/AreaField";

const BookForm = () => {
  return (
    <div className="p-6 border border-black/20 rounded-[10px]">
      <h3 className="heading-2">Book your campervan now</h3>
      <p className="body-1 mt-2 text-dark">
        Stay connected! We are always ready to help you.
      </p>

      <form className="mt-6">
        <div className="space-y-[14px]">
          <Field
            type="text"
            placeholder="Name"
          />

          <Field
            type="email"
            placeholder="Email"
          />

          <Field
            type="text"
            placeholder="Booking date"
            IconEnd={CalendarIcon}
          />

          <AreaField placeholder="Comment" />
        </div>

        <button
          type="submit"
          className="button-primary mt-10 px-[60px]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
