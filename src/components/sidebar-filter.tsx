"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatterCurrency } from "@/utils/formatter";
import { Checkbox, Slider } from "antd";
import { useState } from "react";

const productCategory = [
  {
    label: "Men",
    value: "men",
  },
  {
    label: "Women",
    value: "women",
  },
  {
    label: "Kids",
    value: "kids",
  },
  {
    label: "Bags",
    value: "bags",
  },
  {
    label: "Winter Wear",
    value: "winter wear",
  },
];

const colors = [
  {
    label: "Red",
    value: "#E15353",
  },
  {
    label: "Blue",
    value: "#5553E1",
  },
  {
    label: "Orange",
    value: "#E1A053",
  },
  {
    label: "Black",
    value: "#000000",
  },
  {
    label: "Green",
    value: "#A3D139",
  },
  {
    label: "Yellow",
    value: "#E1D353",
  },
];

const sizes = [
  {
    label: "S",
    value: "S",
  },
  {
    label: "M",
    value: "M",
  },
  {
    label: "L",
    value: "L",
  },
  {
    label: "XL",
    value: "XL",
  },
  {
    label: "XXL",
    value: "XXL",
  },
  {
    label: "XXXL",
    value: "XXXL",
  },
];

const SideBarFilter = () => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleChange = (e: any) => {
    setMinPrice(e[0]);
    setMaxPrice(e[1]);
  };

  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Categories</AccordionTrigger>
        <AccordionContent>
          <div className="mx-2 flex flex-col space-y-2">
            {productCategory.map(
              (category: { label: string; value: string }, index) => (
                <Checkbox key={index} value={category.value}>
                  {category.label}
                </Checkbox>
              ),
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Filter by Price</AccordionTrigger>
        <AccordionContent>
          <div className="mx-2 flex flex-col space-y-2">
            <div className="">
              Price: {formatterCurrency.format(minPrice)} -{" "}
              {formatterCurrency.format(maxPrice)}
            </div>
            <div className=" ">
              <Slider
                value={[minPrice, maxPrice]}
                min={1}
                max={1000}
                range
                onChange={handleChange}
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Filter by Color</AccordionTrigger>
        <AccordionContent>
          <div className="mx-2 flex flex-col space-y-2">
            {colors.map((color, index) => (
              <Checkbox key={index} value={color.value}>
                <div className="mt-[3px] flex flex-row items-center space-x-2">
                  <div
                    className="h-4 w-4 rounded-sm"
                    style={{ backgroundColor: color.value }}
                  />
                  <span>{color.label}</span>
                </div>
              </Checkbox>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Filter by Size</AccordionTrigger>
        <AccordionContent>
          <div className="mx-2 flex flex-col space-y-2">
            {sizes.map((size, index) => (
              <Checkbox key={index} value={size.value}>
                <span>{size.label}</span>
              </Checkbox>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideBarFilter;
