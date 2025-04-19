import { createFileRoute } from "@tanstack/react-router";
import ProductsPage from "../components/pages/ProductsPage";

type QueryParams = {
  page: number;
};

export const Route = createFileRoute("/")({
  validateSearch: (searchParams: Record<string, string>): QueryParams => {
    const pageNum = Number(searchParams?.page);

    return {
      page: !isNaN(pageNum) ? Math.abs(pageNum) : 1,
    };
  },
  component: ProductsPage,
});
