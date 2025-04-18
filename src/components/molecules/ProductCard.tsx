import { Link } from "@tanstack/react-router";
import React from "react";
import type { Product } from "../../types/products";
import { Card } from "../atoms/Card";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="p-0 max-w-80">
      <Link to="/product/$productId" params={{ productId: product.id }}>
        <img
          className="w-full h-36 object-cover rounded-t-xl"
          loading="lazy"
          src={product.image}
          alt={product.name}
        />
        <div className="px-4 py-6 flex flex-col gap-2">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      </Link>
    </Card>
  );
};
