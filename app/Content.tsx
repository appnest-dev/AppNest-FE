"use client";

import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Content({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && !pathname.includes("/dashboard")) {
      redirect("/dashboard");
    } else if (!token && pathname.includes("/dashboard")) {
      redirect("/auth");
    }
  }, [pathname]);

  return children;
}
