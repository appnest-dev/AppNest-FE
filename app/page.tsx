import HLogo from "@/components/HLogo";
import Link from "next/link";

import "./page.css";

declare global {
  interface String {
    capitalize(): string;
  }
}

export default function Home() {
  return (
    <main className="d-flex flex-lg-row flex-column bg-white align-items-center justify-content-around min-h-screen container gap-4">
      <div
        className="d-flex flex-column align-items-lg-start align-items-center"
        style={{ gap: 60 }}
      >
        <HLogo />

        <div className="d-flex flex-column gap-1 align-items-lg-start align-items-center">
          <h3 style={{ fontWeight: 600, color: "black" }} className="fs-3">
            Welcome to AppNest
          </h3>

          <p className="fs-5 w-lg-75 w-100 text-lg-start text-center">
            The place to nest and nurture your web application plans before
            executing
          </p>
        </div>
      </div>

      <div className="d-flex flex-column gap-2">
        <Link
          href={"/auth/register"}
          style={{
            width: 200,
          }}
          className="text-center py-2 rounded fw-medium auth-button"
        >
          Register
        </Link>
        <div className="position-relative w-100">
          <hr />
          <span
            className="d-block position-absolute bg-white translate-middle start-50 top-50 px-1"
            style={{ fontSize: 14 }}
          >
            OR
          </span>
        </div>
        <Link
          href={"/auth"}
          style={{
            width: 200,
          }}
          className="text-center py-2 rounded fw-medium auth-button"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
