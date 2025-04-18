import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/products";
import { axiosClient } from "./axios-client";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axiosClient<Product[]>("/products");
        const data = await response.data;
        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_err) {
        throw new Error("Something went wrong during the product fetching");
      }
    },
  });
};
