import FilterRadio from "components/UIKit/FilterRadio";
import { formOptions } from "utils/filterOptions";

const FilterTypes = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-2">
      {formOptions.map(option => (
        <li key={option}>
          <FilterRadio
            iconKey={option}
            name="form"
          />
        </li>
      ))}
    </ul>
  );
};
export default FilterTypes;
