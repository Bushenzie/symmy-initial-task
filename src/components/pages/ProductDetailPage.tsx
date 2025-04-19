import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../atoms/ErrorFallback";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { GoBackButton } from "../molecules/GoBackButton";
import { ProductDetail } from "../organisms/ProductDetail";

const ProductDetailPage = () => {
  return (
    <div className="flex w-full max-w-screen justify-center items-center">
      <GoBackButton className="absolute px-0 top-4 left-4" />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProductDetailPage;
