import Header from "@/components/header";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
