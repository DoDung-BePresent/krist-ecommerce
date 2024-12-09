import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

import { Roboto } from "next/font/google";
import { ConfigProvider } from "antd";
import { colors } from "@/constants/colors";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: roboto.style.fontFamily,
            },
            components: {
              Input: {
                activeBorderColor: `${colors.primary500}`,
                hoverBorderColor: `${colors.primary500}`,
                activeShadow: `${colors.activeShadow}`,
                colorBorder: `${colors.primary500}`,
              },
              Button: {
                defaultBorderColor: `${colors.primary20}`,
                defaultHoverBorderColor: `${colors.primary20}`,
                defaultHoverColor: `${colors.black}`,
                defaultHoverBg: `${colors.primary5}`,
                defaultActiveBorderColor: `${colors.primary500}`,
                defaultActiveColor: `${colors.primary500}`,
              },
              Form: {
                itemMarginBottom: 22,
              },
              Checkbox: {
                colorPrimaryHover: `${colors.primary500}`,
                colorPrimary: `${colors.primary500}`,
                colorBorder: `${colors.primary500}`,
              },
              Slider: {
                trackBg: `${colors.primary500}`,
                trackHoverBg: `${colors.primary500}`,
                handleActiveColor: `${colors.primary500}`,
                handleActiveOutlineColor: `${colors.primary500}`,
                handleColor: `${colors.primary500}`,
                dotActiveBorderColor: `${colors.primary500}`,
                colorPrimaryBorderHover: `${colors.primary500}`,
              },
            },
          }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
