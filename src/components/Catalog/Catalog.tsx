// import Chip from "components/UIKit/Chip";
// import Modal from "components/UIKit/Modal";
// import { useModal } from "hooks/useModal";

import FilterRadio from "components/UIKit/FilterRadio";

// import FilterCheckbox from "components/UIKit/FilterCheckbox";

// import LocationLabel from "components/UIKit/LocationLabel";

// import ReviewsLabel from "components/UIKit/ReviewsLabel/ReviewsLabel";

const Catalog = () => {
  // const { open, isOpen, close } = useModal();

  return (
    <>
      <div className="container-default outline outline-fuchsia-400">
        <div className="flex items-start gap-x-16 h-[600px]">
          <aside className="outline outline-green-700 w-[360px]">
            Filter
            {/* <button onClick={open}>CLICK</button> */}
          </aside>

          <div className="outline outline-cyan-700 w-full ">
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
          </div>
        </div>
      </div>

      {/* <Modal
        close={close}
        isOpen={isOpen}
      >
        <div className="text-3xl overflow-y-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          qui esse ratione aperiam consectetur reprehenderit ipsa ipsum eius
          obcaecati rem maiores expedita reiciendis unde cumque, consequuntur,
        </div>
      </Modal> */}
    </>
  );
};

export default Catalog;
