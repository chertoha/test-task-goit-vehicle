import { useFormikContext } from "formik";
import { MdClose } from "react-icons/md";
import { initialFilterValues } from "utils/initialFormValues";

const FilterClear = () => {
  const { setValues } = useFormikContext();

  const clear = () => {
    setValues({ ...initialFilterValues });
  };

  return (
    <button
      type="button"
      className="transition-default  flex gap-x-1  hover:scale-110 "
      onClick={clear}
    >
      <MdClose size={24} />
      Clear
    </button>
  );
};
export default FilterClear;
