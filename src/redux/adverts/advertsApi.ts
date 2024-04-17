import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/api";
import { Vehicle } from "types/entities";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "services/config";

type AdvertsQuery = {
  page: number;
};

export const advertsApi = createApi({
  reducerPath: "adverts",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getAdverts: builder.query<Vehicle[], AdvertsQuery>({
      query: ({ page = DEFAULT_QUERY_PAGE }) => ({
        url: "/advert",
        method: "GET",
        params: {
          page,
          limit: DEFAULT_QUERY_LIMIT,
        },
      }),
    }),
  }),
});

export const { useGetAdvertsQuery } = advertsApi;
