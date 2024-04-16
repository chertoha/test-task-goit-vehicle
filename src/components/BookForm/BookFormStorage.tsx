import { SessionStorage } from "services/storage";
import { BookFormValues } from "./BookForm";
import { FC, useEffect } from "react";
import { useFormikContext } from "formik";

interface IBookFormStorageProps {
  session: SessionStorage<BookFormValues>;
}

const BookFormStorage: FC<IBookFormStorageProps> = ({ session }) => {
  const { values } = useFormikContext<BookFormValues>();

  useEffect(() => {
    session.set(values);
  }, [values, session]);

  return null;
};

export default BookFormStorage;
