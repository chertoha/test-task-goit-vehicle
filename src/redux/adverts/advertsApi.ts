import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/api";
import { Vehicle } from "types/entities";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";
import { customResponseTransform } from "utils/customResponseTransform";

export type AdvertsQuery = {
  page: number;
  location: string;
  form: string;
  options: string[];
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

    getFilteredAdverts: builder.query<{ vehicles: Vehicle[]; count: number }, AdvertsQuery>({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      query: _args => ({
        url: "/advert",
        method: "GET",
      }),
      transformResponse: (response: Vehicle[], _meta, args) => {
        return customResponseTransform(response, args);
      },
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useLazyGetAdvertsQuery,
  useGetAdvertsCountQuery,
  useGetFilteredAdvertsQuery,
} = advertsApi;
