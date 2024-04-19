import FilterCheckbox from "components/UIKit/FilterCheckbox";
import { equipmentOptions } from "utils/filterOptions";

const FilterOptions = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3  gap-x-[10px] gap-y-2">
      {equipmentOptions.map(option => (
        <li key={option}>
          <FilterCheckbox
            iconKey={option}
            name="options"
          />
        </li>
      ))}
    </ul>
  );
};
export default FilterOptions;
