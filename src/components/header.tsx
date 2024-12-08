import Image from "next/image";
import MainNav from "@/components/main-nav";
import NavAction from "./nav-action";
import { Button } from "antd";

const Header = () => {
  return (
    <nav className="sticky top-0">
      <div className="flex flex-row items-center justify-between gap-5 border-b py-5">
        <Image src="/logo.svg" width={150} height={100} alt="Logo" />
        <MainNav className="flex-1" />
        <NavAction />
        <Button variant="solid" color="default" size="large">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Header;
