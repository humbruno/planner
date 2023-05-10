import React from "react";
import Sidebar from "~/components/Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
