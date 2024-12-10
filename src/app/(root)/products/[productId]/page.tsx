import ProductDetail from "@/components/product/product-detail";
import { Breadcrumb } from "antd";

const ProductPage = () => {
  return (
    <div className="section-sm">
      <div className="">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: "Products",
            },
            {
              title: "Product ABC",
            },
          ]}
        />
      </div>
      <div className="my-8">
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProductPage;
