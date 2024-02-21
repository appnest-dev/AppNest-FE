"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function Logout() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem(`token`);
    router.push("/auth");
  };

  return (
    <Button variant="danger" onClick={logout} className="p-2">
      Logout
    </Button>
  );
}
