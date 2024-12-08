import { cn } from "@/utils/tw-merge";
import { Button } from "antd";
import { Bag2, Heart, SearchNormal1 } from "iconsax-react";

interface NavActionProps {
  className?: string;
}

const NavAction: React.FC<NavActionProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-row items-center space-x-2", className)}>
      <Button type="text" icon={<SearchNormal1 size={20} />} />
      <Button type="text" icon={<Heart size={20} />} />
      <Button type="text" icon={<Bag2 size={20} />} />
    </div>
  );
};

export default NavAction;
