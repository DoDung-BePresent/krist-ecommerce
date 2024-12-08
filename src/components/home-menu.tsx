import Link from "next/link";
import {
  footwearCategories,
  kidsCategories,
  menCategories,
  womenCategories,
} from "@/constants/categories";
import { cn } from "@/utils/tw-merge";

const HomeMenu = () => {
  return (
    <div className="grid min-w-[60vw] grid-cols-4 px-2 py-10">
      <div className="border-r px-6">
        <h3 className="mb-2 font-semibold">Men</h3>
        <ul className="flex flex-col space-y-2">
          {menCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn("hover:text-primary300")}
            >
              {category.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="border-r px-6">
        <h3 className="mb-2 font-semibold">Women</h3>
        <ul className="flex flex-col space-y-2">
          {womenCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn("hover:text-primary300")}
            >
              {category.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="border-r px-6">
        <h3 className="mb-2 font-semibold">Footwear</h3>
        <ul className="flex flex-col space-y-2">
          {footwearCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn("hover:text-primary300")}
            >
              {category.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="px-6">
        <h3 className="mb-2 font-semibold">Kids</h3>
        <ul className="flex flex-col space-y-2">
          {kidsCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn("hover:text-primary300")}
            >
              {category.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeMenu;
