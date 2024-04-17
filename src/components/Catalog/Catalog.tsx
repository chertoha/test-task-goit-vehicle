// import Chip from "components/UIKit/Chip";
// import Modal from "components/UIKit/Modal";

import Filter from "components/Filter";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsApi";
import CatalogCardList from "components/CatalogCardList";

const Catalog = () => {
  const {
    data: vehiclesList,
    isError,
    isFetching,
  } = useGetAdvertsQuery({ page: 1 });

  if (isFetching) return <div>Loading....</div>;
  if (isError) return <div>Error component</div>;
  if (!vehiclesList) return null;

  console.log(vehiclesList);

  return (
    <>
      <div className="container-default outline outline-fuchsia-400">
        <div className="flex items-start gap-x-16 ">
          <aside className="shrink-0  w-[360px]">
            <Filter />
          </aside>

          <div className="w-full ">
            {/* <VehicleCard /> */}

            <CatalogCardList list={vehiclesList} />

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
