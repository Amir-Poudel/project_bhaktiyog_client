import Footer from "@/components/client/layout/footer";
import NavBar from "@/components/client/layout/navbar";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
