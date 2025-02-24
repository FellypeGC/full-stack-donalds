"use client"

import type { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
  product: Pick<Product, 'name' | 'imageUrl'>
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter()
  const handleBackClick = () => router.back();
  
  return (
    <div className="relative min-h-[300px] w-full">
      <Button 
        variant="secondary" 
        size="icon" 
        className="absolute top-4 left-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Image 
        src={product.imageUrl} 
        alt={product.name} 
        fill 
        className="object-contain" 
      />

      <Button 
        variant="secondary" 
        size="icon" 
        className="absolute top-4 right-4 z-50 rounded-full" >
        <ScrollTextIcon />
      </Button>
        
      </div>
  );
}
 
export default ProductHeader;