import Image from "next/image";
import { Tab } from "@headlessui/react";

interface GalleryTabProps {
  imageSrc: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ imageSrc }) => {
  return (
    <Tab
      as="div"
      className="relative inset-0 aspect-square overflow-hidden rounded-md border"
    >
      <Image
        fill
        src={imageSrc}
        alt="Product"
        className="object-cover object-center"
      />
    </Tab>
  );
};

export default GalleryTab;
