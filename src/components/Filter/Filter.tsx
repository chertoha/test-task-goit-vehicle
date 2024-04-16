import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import FilterCheckbox from "components/UIKit/FilterCheckbox";
import FilterRadio from "components/UIKit/FilterRadio";
import InputField from "components/UIKit/InputField";
import { Formik } from "formik";
import { FC } from "react";

interface IFilterProps {
  //...
}

export type FilterValues = {
  search: string;
  options: string[];
  form: string;
};

const initialValues: FilterValues = {
  search: "",
  options: [],
  form: "van",
};

const Filter: FC<IFilterProps> = () => {
  const onSubmitHandler = (values: FilterValues) => {
    console.log(values);
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
                name="search"
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
                <ul className="grid grid-cols-3 gap-x-[10px] gap-y-2">
                  <li>
                    <FilterCheckbox
                      iconKey="airConditioner"
                      name="options"
                      title="AC"
                    />
                  </li>

                  <li>
                    <FilterCheckbox
                      iconKey="transmission"
                      name="options"
                      title="automatic"
                    />
                  </li>

                  <li>
                    <FilterCheckbox
                      iconKey="kitchen"
                      name="options"
                      title="kitchen"
                    />
                  </li>

                  <li>
                    <FilterCheckbox
                      iconKey="tv"
                      name="options"
                      title="TV"
                    />
                  </li>

                  <li>
                    <FilterCheckbox
                      iconKey="shower"
                      name="options"
                      title="shower"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="heading-2">Vehicle type</h3>

              <div className="mt-6 pt-6 border-t border-black/10">
                <ul className="grid grid-cols-3 gap-x-[10px] gap-y-2">
                  <li>
                    <FilterRadio
                      iconKey="van"
                      name="form"
                      title="van"
                    />
                  </li>

                  <li>
                    <FilterRadio
                      iconKey="fullyIntegrated"
                      name="form"
                      title="Fully Integrated"
                    />
                  </li>

                  <li>
                    <FilterRadio
                      iconKey="alcove"
                      name="form"
                      title="alcove"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="button-primary px-[60px] mt-16"
          >
            Search
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Filter;
