import { colors } from "@/constants/colors";
import { Divider, Input } from "antd";
import { ArrowRight, Map, MessageQuestion } from "iconsax-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary500 py-5 text-white">
      <div className="container pt-10">
        <div className="grid grid-cols-3">
          <div className="">
            <Image src="/logo-dark.svg" width={150} height={100} alt="Logo" />
            <div className="my-10 flex flex-col space-y-3">
              <div className="flex flex-row items-center gap-2">
                <Phone size={24} /> (+84) 35 219 5876
              </div>
              <div className="flex flex-row items-center gap-2">
                <MessageQuestion size={24} /> krist@example.com
              </div>
              <div className="flex flex-row items-center gap-2">
                <Map size={24} /> FPT University
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-10">
            <div className="">
              <h4 className="heading-4 font-semibold">Information</h4>
              <div className="my-3 flex flex-col space-y-2">
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  My Account
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Login
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  My Cart
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  My Wishlist
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Checkout
                </Link>
              </div>
            </div>
            <div className="">
              <h4 className="heading-4 font-semibold">Service</h4>
              <div className="my-3 flex flex-col space-y-2">
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  About Us
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Careers
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Delivery Information
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="transition-colors duration-150 ease-in hover:text-primary100"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="heading-4 font-semibold">Subscribe</h4>
            <div className="flex flex-col space-y-5">
              <p>
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <Input
                size="large"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                  width: "400px",
                }}
                prefix={<MessageQuestion size={24} />}
                suffix={<ArrowRight size={20} />}
                placeholder="Your Email"
              />
            </div>
          </div>
        </div>
        <Divider style={{ backgroundColor: `${colors.primary400}` }} />
        <div className="text-center">&copy; Krist All Rights are reserved</div>
      </div>
    </div>
  );
};

export default Footer;
