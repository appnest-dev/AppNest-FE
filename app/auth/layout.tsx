import type { Metadata } from "next";
import { Stack } from "react-bootstrap";
import HLogo from "@/components/HLogo";
import TokenCheck from "../../components/form/functions/TokenCheck";
import "./layout.css";

export const metadata: Metadata = {
  title: "AppNest | Auth",
  description: "Login or register.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      gap={3}
      className="py-4 min-h-screen d-flex flex-column justify-content-center bg-light"
    >
      <TokenCheck />
      <div className="w-100 d-flex justify-content-center pb-3">
        <HLogo />
      </div>
      {children}
    </Stack>
  );
}
