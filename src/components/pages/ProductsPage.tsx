import { Separator } from "../atoms/Separator";
import { ProductList } from "../organisms/ProductList";

const ProductsPage = () => {
  return (
    <div className="flex flex-col md:mb-8 gap-8 min-h-screen w-full max-w-[1160px] justify-center items-center">
      <div className="flex flex-col w-full self-start gap-2 mt-8">
        <h1 className="text-5xl font-bold self-start">Products</h1>
        <div className="text-gray-600">You can view all the products here</div>
      </div>
      <Separator />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
