import { Button } from "antd";
import ProductCard from "@/components/product-card";

const products = [
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
  {
    id: "dhcgfdf",
    name: "Road Star",
    brand: "Yody",
    price: 40,
    salePrice: 30,
    imageSrc: "/product.png",
  },
];

const ProductList = () => {
  return (
    <>
      <div className="text-right">
        <Button variant="solid" color="default">
          Sort
        </Button>
      </div>
      <div className="my-5 grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            salePrice={product.salePrice}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
