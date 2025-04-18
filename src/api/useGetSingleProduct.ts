import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/products";
import { axiosClient } from "./axios-client";

type GetSingleProductProps = {
  id: string;
};

export const useGetSingleProduct = ({ id }: GetSingleProductProps) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      try {
        const response = await axiosClient<Product>(`/products/${id}`);
        const data = await response.data;
        return data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_err) {
        throw new Error("Something went wrong during the product fetching");
      }
    },
  });
};
