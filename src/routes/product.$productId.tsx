import { createFileRoute } from "@tanstack/react-router";
import ProductDetailPage from "../components/pages/ProductDetailPage";

export const Route = createFileRoute("/product/$productId")({
  component: ProductDetailPage,
});
