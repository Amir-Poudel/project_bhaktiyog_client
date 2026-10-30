"use client";

import { useState } from "react";
import MenuToggle from "@/components/admin/FloatingMenu";
import Footer from "@/components/client/layout/footer";
import NavBar from "@/components/client/layout/navbar";
import React from "react";
import FloatingMenu from "@/components/admin/FloatingMenu";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <FloatingMenu />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default AdminLayout;
