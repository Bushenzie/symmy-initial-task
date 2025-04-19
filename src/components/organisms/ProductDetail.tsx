import { useParams } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useGetSingleProduct } from "../../api/useGetSingleProduct";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export const ProductDetail: React.FC = () => {
  const { productId } = useParams({ from: "/product/$productId" });
  const { data: product } = useGetSingleProduct({ id: productId });

  return (
    <div className="flex w-full max-w-screen justify-center items-center">
      <div className="max-w-[1160px] mt-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">
        <img
          className="rounded-2xl w-full h-64 lg:px-0 lg:w-128 lg:h-128 block m-auto object-cover bg-cover"
          loading="lazy"
          src={product?.image}
          alt={product?.name}
        />
        <div className="flex flex-col h-full justify-evenly gap-6 p-4">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline">{product?.material}</Badge>
            <h1 className="text-4xl">{product?.name}</h1>
            <p className="text-gray-600">{product?.description}</p>
          </div>
          <div className="flex flex-col items-end text-right gap-4 md:text-left md:flex-row justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">In stock: {product?.stock}</span>
              <h3 className="text-4xl font-bold">{product?.price}$</h3>
            </div>
            <Button>
              <ShoppingBag />
              Order now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
