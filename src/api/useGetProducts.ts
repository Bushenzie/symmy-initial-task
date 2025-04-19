import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product } from "../types/products";
import { axiosClient } from "./axios-client";

type GetProductsProps = {
  page?: number;
  limit?: number;
};

/**
 * TODO:
 * Move these custom query/mutation hooks into router loader fns and use router error/suspense boundaries...
 */

export const useGetProducts = ({ page, limit }: GetProductsProps) => {
  return useSuspenseQuery({
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
      } catch (_) {
        throw new Error("Something went wrong during the products fetching");
      }
    },
  });
};
