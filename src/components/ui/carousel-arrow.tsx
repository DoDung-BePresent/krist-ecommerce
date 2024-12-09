import { Button } from "antd";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import React from "react";

const CarouselArrow = () => {
  return (
    <div className="flex flex-row space-x-2">
      <Button
        variant="filled"
        color="default"
        size="large"
        icon={<ArrowLeft size={20} />}
      />
      <Button
        variant="filled"
        color="default"
        size="large"
        icon={<ArrowRight size={20} />}
      />
    </div>
  );
};

export default CarouselArrow;
