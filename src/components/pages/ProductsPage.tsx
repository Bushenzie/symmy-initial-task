import { useGetProducts } from "../../api/useGetProducts";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { ProductCard } from "../molecules/ProductCard";

const ProductsPage = () => {
  const { data, isLoading, isError, isSuccess } = useGetProducts();

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col self-start gap-2 mt-8">
        <h1 className="text-5xl font-bold self-start">Products</h1>
        <div className=" text-gray-600">You can view all the products here</div>
      </div>
      {isLoading && <LoadingSpinner />}
      {isError && <h1 className="text-red-500">Something went wrong</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {isSuccess && data.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </div>
  );
};

export default ProductsPage;
