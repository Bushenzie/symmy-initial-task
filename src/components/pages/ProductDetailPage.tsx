import { useParams } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useGetSingleProduct } from "../../api/useGetSingleProduct";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { GoBackButton } from "../molecules/GoBackButton";

const ProductDetailPage = () => {
  const { productId } = useParams({ from: "/product/$productId" });
  const { data: product, isLoading, isError, isSuccess } = useGetSingleProduct({ id: productId });

  return (
    <div className="flex w-full max-w-screen justify-center items-center">
      <GoBackButton className="absolute top-4 left-4" />
      {isLoading && <LoadingSpinner />}
      {isError && <h1 className="text-red-500">Something went wrong</h1>}
      {isSuccess && (
        <div className="max-w-[1080px] mt-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">
          <img
            className="rounded-2xl px-16 w-full h-64 lg:px-0 lg:w-128 lg:h-128 block m-auto object-cover bg-cover"
            loading="lazy"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-col h-full justify-evenly gap-6 mx-16 p-4">
            <div className="flex flex-col items-start gap-6">
              <Badge variant="outline">{product.material}</Badge>
              <h1 className="text-4xl">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="flex flex-col items-end text-right gap-4 md:text-left md:flex-row justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-gray-500">In stock: {product.stock}</span>
                <h3 className="text-4xl font-bold">{product.price}$</h3>
              </div>
              <Button>
                <ShoppingBag />
                Order now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
