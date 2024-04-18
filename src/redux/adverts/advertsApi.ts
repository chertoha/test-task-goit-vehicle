import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/api";
import { Vehicle } from "types/entities";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";

type AdvertsQuery = {
  page: number;
  location: string;
  form: string;
  options: unknown;
};
type AdvertsCountQuery = Omit<AdvertsQuery, "page">;

export const advertsApi = createApi({
  reducerPath: "adverts",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getAdverts: builder.query<Vehicle[], AdvertsQuery>({
      query: ({ page = DEFAULT_QUERY_PAGE, location, form }) => ({
        url: "/advert",
        method: "GET",
        params: {
          page,
          limit: DEFAULT_QUERY_LIMIT,

          ...(location && { location }),
          ...(form && { form }),
        },
      }),
    }),

    getAdvertsCount: builder.query<number, AdvertsCountQuery>({
      query: ({ form, location }) => ({
        url: "/advert",
        method: "GET",
        params: {
          ...(location && { location }),
          ...(form && { form }),
        },
      }),
      transformResponse: (response: Vehicle[]) => response.length,
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useLazyGetAdvertsQuery,
  useGetAdvertsCountQuery,
} = advertsApi;
