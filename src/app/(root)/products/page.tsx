import ProductList from "@/components/product/product-list";
import SideBarFilter from "@/components/sidebar-filter";
import { Breadcrumb } from "antd";
import React from "react";

const ProductsPage = () => {
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
          ]}
        />
      </div>
      <div className="mt-2 grid grid-cols-[20%_80%] space-x-5">
        <div className="">
          <SideBarFilter />
        </div>
        <div className="">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
