import React from "react";
import Image from "next/image";
import LogoImage from "../../../../public/images/home_logo.svg";
import ProductGrid from "../../components/Layout/ProductGrid";
import { faker } from "@faker-js/faker";

import { type Product } from "@/schema/products";
import ProductItem from "@/components/ListItem/ProductItem";
import Pagintaion from "@/components/Pagintaion";

export default function CenterImage() {
  const generateFakeData = (): Array<Partial<Product>> => {
    return Array.from(
      { length: 10 },
      (_, index) =>
        ({
          name: `Title ${index + 1}`,
          originalPrice: 1500,
          enabled: true,
          photos: ["", ""],
        } as Product)
    );
  };

  const data: Array<Partial<Product>> = generateFakeData();

  return (
    <div className=" ">
      <div className="flex  justify-around ">
        <ProductGrid>
          {data.map((item, index) => (
            <ProductItem key={`product-${index}`} {...item} />
          ))}
        </ProductGrid>
      </div>
      <Pagintaion count={4} />
    </div>
  );
}
