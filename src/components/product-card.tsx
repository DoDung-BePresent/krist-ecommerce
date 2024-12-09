"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatterCurrency } from "@/utils/formatter";
import { Button } from "antd";
import { Heart } from "iconsax-react";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  id: string;
  brand: string;
  price: number;
  salePrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  id,
  brand,
  price,
  salePrice,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group max-w-[400px] cursor-pointer rounded-md border p-3">
      <div className="relative h-[350px] overflow-hidden rounded-md">
        <Image src={imageSrc} fill style={{ objectFit: "cover" }} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 w-full text-center opacity-0 transition-all duration-150 ease-in group-hover:bottom-5 group-hover:opacity-100">
          <Button size="large" className="w-[70%]">
            <Link href={`/${id}`}>Add to Cart</Link>
          </Button>
        </div>
        <div
          className="absolute right-2 top-2 rounded-full bg-white p-2"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <Heart size={20} variant="Bold" color="red" />
          ) : (
            <Heart size={20} />
          )}
        </div>
      </div>
      <div className="py-3">
        <h4 className="heading-5 font-semibold">{name}</h4>
        <p className="text-primary300">{brand}</p>
        <div className="flex flex-row space-x-2">
          <span>{formatterCurrency.format(salePrice)}</span>
          <span className="text-primary200 line-through">
            {formatterCurrency.format(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
