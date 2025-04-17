import { createFileRoute, useParams } from "@tanstack/react-router";

function RouteComponent() {
  const { productId } = useParams({ from: "/product/$productId" });

  return <div>{productId}</div>;
}

export const Route = createFileRoute("/product/$productId")({
  component: RouteComponent,
});
