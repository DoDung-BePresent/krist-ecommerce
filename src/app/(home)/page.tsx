import CategoryCard from "@/components/category-card";
import Banner from "@/components/home/banner";
import ProductCard from "@/components/product-card";
import CarouselArrow from "@/components/ui/carousel-arrow";

const HomePage = () => {
  const categories = [
    {
      name: "Casual Wear",
      href: "/men/casual-wear",
      imageSrc: "/category-card.png",
    },
    {
      name: "Casual Wear",
      href: "/men/casual-wear",
      imageSrc: "/category-card.png",
    },
    {
      name: "Casual Wear",
      href: "/men/casual-wear",
      imageSrc: "/category-card.png",
    },
    {
      name: "Casual Wear",
      href: "/men/casual-wear",
      imageSrc: "/category-card.png",
    },
  ];

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

  return (
    <main className="py-5">
      <Banner className="mt-2" />
      {/* Categories */}
      <div className="section">
        <div className="flex flex-row items-center justify-between">
          <h1 className="heading-2 font-medium">Shop by Categories</h1>
          <CarouselArrow />
        </div>
        <div className="my-10 grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              imageSrc={category.imageSrc}
              name={category.name}
              href={category.href}
            />
          ))}
        </div>
      </div>
      {/* Bestseller */}
      <div className="section">
        <div className="text-center">
          <h1 className="heading-2 font-medium">Out Bestseller</h1>
        </div>
        <div className="my-10 grid grid-cols-4 gap-4">
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
      </div>
    </main>
  );
};

export default HomePage;
