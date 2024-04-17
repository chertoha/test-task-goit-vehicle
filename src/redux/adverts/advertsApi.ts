import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/api";
import { Vehicle } from "types/entities";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";

type AdvertsQuery = {
  page: number;
  search: string;
  form: string;
  options: unknown;
};

type AdvertsCountQuery = {
  search: string;
  form: string;
  options: unknown;
};

export const advertsApi = createApi({
  reducerPath: "adverts",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getAdverts: builder.query<Vehicle[], AdvertsQuery>({
      query: ({ page = DEFAULT_QUERY_PAGE, options, ...rest }) => ({
        url: "/advert",
        method: "GET",
        params: {
          page,
          limit: DEFAULT_QUERY_LIMIT,
          ...rest,
        },
      }),
    }),

    getAdvertsCount: builder.query<number, AdvertsCountQuery>({
      query: ({ options, ...rest }) => ({
        url: "/advert",
        method: "GET",
        params: {
          ...rest,
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
