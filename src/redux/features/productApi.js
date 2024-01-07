import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "Item?page=1&pageSize=10",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
