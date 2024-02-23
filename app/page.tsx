import HLogo from "@/components/HLogo";
import Link from "next/link";

import "./page.css";

export default function Home() {
  return (
    <main className="d-flex flex-column bg-light justify-content-center align-items-center gap-4 min-h-screen">
      <HLogo width={300} />

      <h3>Welcome to AppNest</h3>

      <p>
        The place to nest and nurture your web application plans before
        executing
      </p>

      <div className="d-flex gap-3">
        <Link
          href={"/auth/register"}
          className="text-decoration-none d-inline-block py-2 px-3 fs-4 fw-semibold badge text-black m-2 shadow"
        >
          Register
        </Link>
        <Link
          href={"/auth"}
          className="text-decoration-none d-inline-block py-2 px-3 fs-4 fw-semibold badge text-black m-2 shadow"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
