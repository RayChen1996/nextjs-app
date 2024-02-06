import React from "react";

import Footer from "./components/Footer";

interface BasicLayoutProps {
  children?: React.ReactNode;
}

/** - 基本外框 */
export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div className="flex flex-col bg-[#F6E4CD] min-h-screen">
      <main className=" flex-1">{children}</main>
      <Footer />
    </div>
  );
}
