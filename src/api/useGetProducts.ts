import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/products";
import { axiosClient } from "./axios-client";

type GetProductsProps = {
  page?: number;
  limit?: number;
};

export const useGetProducts = ({ page, limit }: GetProductsProps) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      try {
        const response = await axiosClient<Product[]>("/products", {
          params: {
            page,
            limit,
          },
        });
        const data = await response.data;

        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_err) {
        throw new Error("Something went wrong during the product fetching");
      }
    },
  });
};
