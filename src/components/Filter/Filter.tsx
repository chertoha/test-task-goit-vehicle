import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import { TogglerContext } from "components/Toggler/Toggler";
import InputField from "components/UIKit/InputField";
import { Formik } from "formik";
import { FC, useContext } from "react";
import { FilterValues } from "types/formValues";
import FilterOptions from "./FilterOptions";
import FilterTypes from "./FilterTypes";
import FilterClear from "./FilterClear";

interface IFilterProps {
  onSubmit: (values: FilterValues) => void;
  initialValues: FilterValues;
}

const Filter: FC<IFilterProps> = ({ onSubmit, initialValues }) => {
  const closeToggler = useContext(TogglerContext);

  const onSubmitHandler = (values: FilterValues) => {
    onSubmit(values);
    closeToggler();
  };

  return (
    <Formik
      onSubmit={onSubmitHandler}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="">
            <h2 className="heading-4 text-black/60">Location</h2>
            <div className="mt-2">
              <InputField
                name="location"
                placeholder="City"
                type="text"
                IconStart={LocationIcon}
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="heading-4 text-dark">Filters</h2>
            <div className="mt-[14px]">
              <h3 className="heading-2">Vehicle equipment</h3>
              <div className="mt-6 pt-6 border-t border-black/10">
                <FilterOptions />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="heading-2">Vehicle type</h3>
              <div className="mt-6 pt-6 border-t border-black/10">
                <FilterTypes />
              </div>
            </div>
          </div>

          <div className="relative mt-16 inline-flex">
            <button
              type="submit"
              className="button-primary px-[60px] "
            >
              Search
            </button>

            <div className="absolute top-1/2 -right-5 -translate-y-1/2 translate-x-full">
              <FilterClear />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Filter;
