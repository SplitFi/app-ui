import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Sidebar from "./Sidebar";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
      <div className={"flex min-h-screen w-full"}>
        <Sidebar />

        <div className={"flex flex-col overflow-hidden w-full"}>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </div>
      </div>
  );
}
