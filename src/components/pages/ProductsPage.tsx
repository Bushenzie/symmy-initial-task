import { useState } from "react";
import { useGetProducts } from "../../api/useGetProducts";
import { Button } from "../atoms/Button";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { Separator } from "../atoms/Separator";
import { ProductCard } from "../molecules/ProductCard";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isSuccess } = useGetProducts({ page: currentPage, limit: 20 });

  const changePage = (by: number) => {
    setCurrentPage((prev) => prev + by);
  };

  return (
    <div className="flex flex-col mb-8 gap-8 justify-center items-center">
      <div className="flex flex-col w-full self-start gap-2 mt-8">
        <h1 className="text-5xl font-bold self-start">Products</h1>
        <div className=" text-gray-600">You can view all the products here</div>
      </div>
      <Separator />
      {isLoading && <LoadingSpinner />}
      {isError && <h1 className="text-red-500">Something went wrong</h1>}
      {isSuccess && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
          {data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
          <div className="col-span-full flex items-center justify-center gap-2">
            {currentPage !== 1 && <Button onClick={() => changePage(-1)}>Prev. page</Button>}
            {data.length > 0 && <Button onClick={() => changePage(1)}>Next page</Button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
