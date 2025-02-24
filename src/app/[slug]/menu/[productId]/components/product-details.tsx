"use client"

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import type { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{ 
    include: { 
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true;
        }
      }
    }
  }>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const handleDecreaseQantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  }
  const handleIncreaseQantity = () => {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl p-5 flex-auto flex flex-col">
      <div className="flex-auto">
        <div className="flex items-center gap-1.5">
          <Image 
            src={product.restaurant.avatarImageUrl} 
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </p>
        </div>

        <h2 className="mt-1 text-xl font-semibold">
          {product.name}
        </h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl format-semibold">
            {formatCurrency(product.price)}
          </h3>
          <div className="flex items-center gap-3 text-center">
            <Button 
              variant="outline"
              className="h-8 w-8 roundex-xl"
              onClick={handleDecreaseQantity}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button 
              variant="destructive"
              className="h-8 w-8 roundex-xl"
              onClick={handleIncreaseQantity}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h4>Sobre</h4>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="5 flex items-center gap-1">
            <ChefHatIcon size={18} />
            <h4>Ingredientes</h4>
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

      </div>
      
      <Button className="w-full mt-6 rounded-full">Adicionar a sacola</Button>
    </div>
  );
}
 
export default ProductDetails;