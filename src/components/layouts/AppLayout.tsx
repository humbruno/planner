import React from "react";
import Sidebar from "~/components/Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
