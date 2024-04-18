import Filter from "components/Filter";
import {
  useGetAdvertsCountQuery,
  useGetAdvertsQuery,
  useLazyGetAdvertsQuery,
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
  // const zeroRequest = useRef(true);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState<number>(DEFAULT_QUERY_PAGE);

  const [filterQuery, setFilterQuery] =
    useState<FilterValues>(initialFilterValues);

  // const [getAdverts, { isError, isFetching }] = useLazyGetAdvertsQuery();
  const { data, isError, isFetching } = useGetAdvertsQuery({
    page,
    ...filterQuery,
  });

  const { data: countVehicles } = useGetAdvertsCountQuery({ ...filterQuery });

  const increasePage = () => setPage(p => p + 1);

  // useEffect(() => {
  //   if (zeroRequest.current) {
  //     zeroRequest.current = false;
  //     return;
  //   }

  //   getAdverts({ page, ...filterQuery }).then(response => {
  //     if (!response.data) return;

  //     setVehicles(prevState => {
  //       return [...prevState, ...(response.data as Vehicle[])];
  //     });

  //     // setFilterQuery(initialFilterValues);
  //   });
  // }, [getAdverts, page, filterQuery]);

  // useEffect(() => {
  //   if (!data) return;
  //   setVehicles(prevState => [...prevState, ...data]);
  // }, []);

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

    // if (checkListDuplicates()) return
    // setVehicles(prevState => {
    //   console.log(checkListDuplicates(prevState, data, "id"));

    //   if (checkListDuplicates(prevState, data, "id")) return prevState;

    //   return [...prevState, ...data];
    // });
  }, [data]);

  const filterQuerySubmitHandler = (filterValues: FilterValues) => {
    console.log(filterValues);

    // setVehicles([]);
    // setPage(DEFAULT_QUERY_PAGE);
    setFilterQuery(filterValues);
  };

  // if (isFetching) return <div>Loading....</div>;
  // if (isError) return <div>Error component</div>;
  if (!vehicles) return null;

  // console.log(vehicles);
  // console.log(filterQuery);

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
