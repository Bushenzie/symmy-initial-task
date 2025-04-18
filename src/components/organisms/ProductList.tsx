import { Redo2, Undo2 } from "lucide-react";
import { useState } from "react";
import { useGetProducts } from "../../api/useGetProducts";
import { Button } from "../atoms/Button";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { ProductCard } from "../molecules/ProductCard";

/**
 * SELF-NOTE:
 * As mockapi.io does not return "count" prop the pagination is quite limited and barebones, infinite query could also be used,
 * but I think that would quite overkill.
 */

export const ProductList: React.FC = () => {
  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isSuccess } = useGetProducts({
    page: currentPage,
    limit: productsPerPage,
  });

  const changePage = (by: number) => {
    setCurrentPage((prev) => prev + by);
  };

  return (
    <div className="h-screen">
      {isLoading && <LoadingSpinner />}
      {isError && <h2 className="text-red-500">Something went wrong</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
        {isSuccess && (
          <>
            {data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            {data.length === 0 && (
              <h2 className=" text-gray-400 col-span-full text-center">
                There are no products here
              </h2>
            )}
            <div className="col-span-full flex items-center justify-center gap-2 mb-8">
              <Button onClick={() => changePage(-1)} isDisabled={currentPage === 1}>
                <Undo2 size={14} />
                Prev. page
              </Button>
              <Button
                onClick={() => changePage(1)}
                isDisabled={data.length === 0 || data.length < productsPerPage}
              >
                Next page
                <Redo2 size={14} />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
