import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/api";

export const advertsApi = createApi({
  reducerPath: "adverts",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getAdverts: builder.query<void, void>({
      query: () => ({
        url: "/advert",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAdvertsQuery } = advertsApi;
