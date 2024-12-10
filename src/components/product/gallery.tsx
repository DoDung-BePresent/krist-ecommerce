import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

const Gallery = () => {
  return (
    <TabGroup as="div" className="mx-auto flex w-[95%] flex-col-reverse">
      <TabList className="mt-5 grid grid-cols-4 gap-4">
        <GalleryTab imageSrc="/product.png" />
        <GalleryTab imageSrc="/product-1.png" />
        <GalleryTab imageSrc="/product-2.png" />
        <GalleryTab imageSrc="/product-3.png" />
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="relative inset-0 aspect-square overflow-hidden rounded-md border">
            <Image
              fill
              src="/product.png"
              alt="Product"
              className="object-cover object-center"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative inset-0 aspect-square overflow-hidden rounded-md border">
            <Image
              fill
              src="/product-1.png"
              alt="Product"
              className="object-cover object-center"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative inset-0 aspect-square overflow-hidden rounded-md border">
            <Image
              fill
              src="/product-2.png"
              alt="Product"
              className="object-cover object-center"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative inset-0 aspect-square overflow-hidden rounded-md border">
            <Image
              fill
              src="/product-3.png"
              alt="Product"
              className="object-cover object-center"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
