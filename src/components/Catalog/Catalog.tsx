import Filter from "components/Filter";
import {
  useGetAdvertsCountQuery,
  useGetAdvertsQuery,
} from "../../redux/adverts/advertsApi";
import CatalogCardList from "components/CatalogCardList";
import { useEffect, useState } from "react";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";
import { Vehicle } from "types/entities";
import { initialFilterValues } from "utils/initialFormValues";
import { FilterValues } from "types/formValues";
import { checkListDuplicates } from "utils/checkListDuplicates";
import Spinner from "components/UIKit/Spinner";

const Catalog = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState<number>(DEFAULT_QUERY_PAGE);

  const [filterQuery, setFilterQuery] =
    useState<FilterValues>(initialFilterValues);

  const { data, isError, isFetching } = useGetAdvertsQuery({
    page,
    ...filterQuery,
  });

  const { data: countVehicles } = useGetAdvertsCountQuery({ ...filterQuery });

  const increasePage = () => setPage(p => p + 1);

  useEffect(() => {
    setVehicles([]);
    setPage(DEFAULT_QUERY_PAGE);
  }, [filterQuery]);

  useEffect(() => {
    if (!data) return;

    setVehicles(prevState =>
      checkListDuplicates(prevState, data, "id")
        ? prevState
        : [...prevState, ...data]
    );
  }, [data]);

  const filterQuerySubmitHandler = (filterValues: FilterValues) => {
    setFilterQuery(filterValues);
  };

  if (!vehicles) return null;

  const isLoadMoreShown =
    !isError &&
    countVehicles &&
    countVehicles > DEFAULT_QUERY_LIMIT &&
    page * DEFAULT_QUERY_LIMIT < countVehicles;
  return (
    <>
      <div className="container-default ">
        <div className="flex items-start gap-x-16 ">
          <aside className="shrink-0  w-[360px] self-stretch">
            <div className="sticky top-10">
              <Filter
                onSubmit={filterQuerySubmitHandler}
                initialValues={filterQuery}
              />
            </div>
          </aside>

          <div className="w-full ">
            {!isError ? (
              isFetching ? (
                <div className="flex justify-center pt-20">
                  <Spinner size={100} />
                </div>
              ) : (
                <CatalogCardList list={vehicles} />
              )
            ) : (
              <div className="heading-1 text-center py-20">
                Sorry, nothing found!
              </div>
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
