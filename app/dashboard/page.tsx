"use client";

import { useLoading } from "@/components/dashboard/LoadingProvider";
import { useEffect } from "react";

export default function Page() {
  const { setLoading } = useLoading();
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setLoading(true);
    }, 1000);
    const timeout2 = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  return <div className="p-5">page</div>;
}
