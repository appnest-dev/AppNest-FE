import Aside from "@/components/dashboard/aside/Aside";
import { Metadata } from "next";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/dashboard/styles.css";
import LoadingProvider from "@/components/dashboard/LoadingProvider";

export const metadata: Metadata = {
  title: "AppNest | dashboard",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <main className="d-flex gap-2" style={{ minHeight: "100dvh" }}>
        <Aside />
        {children}
      </main>
    </LoadingProvider>
  );
}
