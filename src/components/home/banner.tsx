import Image from "next/image";
import { Button } from "antd";
import { ArrowRight } from "iconsax-react";
import { cn } from "@/utils/tw-merge";

interface BannerProps {
  className: string;
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1440 / 600",
        }}
      >
        <Image
          src="/home-page-banner.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Home page banner"
        />
      </div>
      <div className="absolute left-20 top-48">
        <div className="flex flex-col space-y-4">
          <h2 className="heading-2">Classic Exclusive</h2>
          <h1 className="heading-1 font-semibold">Summer Collection</h1>
          <h2 className="heading-3">UPTO 40% OFF</h2>
        </div>
        <Button
          variant="solid"
          color="default"
          size="large"
          className="mt-5 flex items-center"
        >
          Shop Now
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
