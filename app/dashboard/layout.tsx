import Aside from "@/components/dashboard/Aside";
import { Metadata } from "next";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/dashboard/styles.css";

export const metadata: Metadata = {
  title: "AppNest | dashboard",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="d-flex gap-2 h-screen">
      <Aside />
      {children}
    </main>
  );
}
