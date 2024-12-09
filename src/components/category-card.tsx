import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

interface CategoryCardProps {
  imageSrc: string;
  href: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageSrc,
  href,
  name,
}) => {
  return (
    <div className="group relative h-[450px] overflow-hidden rounded-md border">
      <Image
        src={imageSrc}
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        alt={name}
      />
      <div className="absolute bottom-0 left-0 right-0 w-full text-center opacity-0 transition-all duration-150 ease-in group-hover:bottom-5 group-hover:opacity-100">
        <Button size="large" className="w-[70%]">
          <Link href={href}>{name}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
