"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function TokenCheck() {
  useEffect(() => {
    localStorage.getItem(`token`) && redirect("/dashboard");
  }, []);

  return <div></div>;
}
