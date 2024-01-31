"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem(`token`);
    router.push("/auth");
  };

  return (
    <button
      onClick={logout}
      style={{ backgroundColor: "#a80d00", color: "white" }}
    >
      Logout
    </button>
  );
}
