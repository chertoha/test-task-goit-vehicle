import Filter from "components/Filter";
import { useGetFilteredAdvertsQuery } from "../../redux/adverts/advertsApi";
import CatalogCardList from "components/CatalogCardList";
import { useEffect, useState } from "react";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";
import { Vehicle } from "types/entities";
import { initialFilterValues } from "utils/initialFormValues";
import { FilterValues } from "types/formValues";
import { checkListDuplicates } from "utils/checkListDuplicates";
import Spinner from "components/UIKit/Spinner";
import Toggler from "components/Toggler";

const Catalog = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState<number>(DEFAULT_QUERY_PAGE);
  const [filterQuery, setFilterQuery] = useState<FilterValues>(initialFilterValues);
  const { data, isError, isFetching } = useGetFilteredAdvertsQuery({
    page,
    ...filterQuery,
  });

  const increasePage = () => setPage(p => p + 1);

  useEffect(() => {
    setVehicles([]);
    setPage(DEFAULT_QUERY_PAGE);
  }, [filterQuery]);

  useEffect(() => {
    if (!data) return;

    setVehicles(prevState =>
      checkListDuplicates(prevState, data.vehicles, "id")
        ? prevState
        : [...prevState, ...data.vehicles]
    );
  }, [data]);

  const filterQuerySubmitHandler = (filterValues: FilterValues) => {
    setFilterQuery(filterValues);
  };

  if (!vehicles) return null;

  const isLoadMoreShown =
    !isError &&
    !!data?.count &&
    data.count > DEFAULT_QUERY_LIMIT &&
    page * DEFAULT_QUERY_LIMIT < data.count;
  return (
    <>
      <div className="container-default ">
        <h1 hidden>Rent the best van</h1>
        <div className="xl:flex items-start gap-x-16  ">
          <aside className="shrink-0  md:w-[360px] self-stretch">
            <div className="xl:sticky top-10">
              <Toggler title="Filter">
                <Filter
                  onSubmit={filterQuerySubmitHandler}
                  initialValues={filterQuery}
                />
              </Toggler>
            </div>
          </aside>

          <div className="w-full max-xl:mt-6">
            {!isError && data?.count !== 0 ? (
              isFetching ? (
                <div className="flex justify-center pt-20">
                  <Spinner size={100} />
                </div>
              ) : (
                <CatalogCardList list={vehicles} />
              )
            ) : (
              <div className="heading-1 text-center py-20">Sorry, nothing found!</div>
            )}

            <div className="mt-[50px] mx-auto flex justify-center mb-20">
              {isLoadMoreShown && (
                <button
                  type="button"
                  className="button-secondary px-8 "
                  onClick={increasePage}
                >
                  Load more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
