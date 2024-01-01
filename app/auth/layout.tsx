import type { Metadata } from "next";
import { Image, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Sketcher | Auth",
  description: "Login or register.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack
        gap={3}
        className="py-4 h-screen d-flex flex-column justify-content-center"
      >
        <div className="text-center pb-4">
          <div className="pb-2">
            <Image src={""} alt="Logo" />
          </div>
          <h1 className="fs-3">Backend Sketcher</h1>
        </div>
        {children}
      </Stack>
    </>
  );
}
