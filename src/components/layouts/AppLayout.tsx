import React from "react";
import Sidebar from "~/components/Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-screen w-full bg-slate-300 pl-52">{children}</main>
    </div>
  );
};

export default AppLayout;
