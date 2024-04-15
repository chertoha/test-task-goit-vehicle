// import Chip from "components/UIKit/Chip";
// import Modal from "components/UIKit/Modal";

import Filter from "components/Filter";
import DateRangePicker from "components/UIKit/DateRangePicker";
import VehicleCard from "components/VehicleCard";

// import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
// import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

// import Field from "components/UIKit/Field";

// import RatingBar from "components/UIKit/RatingBar";

// import FilterRadio from "components/UIKit/FilterRadio";
// import VehicleCard from "components/VehicleCard";

// import FilterCheckbox from "components/UIKit/FilterCheckbox";

// import LocationLabel from "components/UIKit/LocationLabel";

// import ReviewsLabel from "components/UIKit/ReviewsLabel/ReviewsLabel";

const Catalog = () => {
  return (
    <>
      <div className="container-default outline outline-fuchsia-400">
        <div className="flex items-start gap-x-16 ">
          <aside className="shrink-0  w-[360px]">
            <Filter />
          </aside>

          <div className="w-full ">
            <VehicleCard />

            {/* <Chip
              iconKey="adults"
              title="adults"
              value={2}
            /> */}

            {/* <button className="button-primary w-[170px]">Search</button>
            <br />
            <button className="button-secondary w-[145px]">Load more</button> */}

            {/* <ReviewsLabel
              rate={4.4}
              count={2}
            /> */}

            {/* <LocationLabel location="Kyiv, Ukraine" /> */}

            {/* <FilterCheckbox
              iconKey="airConditioner"
              title="Fully Integrated"
              name="equipment"
            /> */}

            {/* <FilterRadio
              iconKey="van"
              name="type"
              title="Van"
            />
            <FilterRadio
              iconKey="intagrated"
              name="type"
              title="Fully Integrated"
            />
            <FilterRadio
              iconKey="alcove"
              name="type"
              title="Alcove"
            /> */}

            {/* <VehicleCard /> */}

            {/* <RatingBar value={3} /> */}
            {/* 
            <div className="w-[200px]">
              <Field
                placeholder="Name"
                type="text"
                IconStart={LocationIcon}
                IconEnd={CalendarIcon}
              />
            </div> */}

            <DateRangePicker name="date" />

            <div className="mt-[50px] mx-auto flex justify-center">
              <button
                type="button"
                className="button-secondary px-8 "
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
