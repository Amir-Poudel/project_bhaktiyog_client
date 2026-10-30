"use client";
import React from "react";
import AuthProvider from "./auth.provider";
import ReactQueryClientProvider from "./query-client.provider";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/contexts/auth.context";
import { getProfile } from "@/api/auth.api";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryClientProvider>
  );
};
export default Providers;
