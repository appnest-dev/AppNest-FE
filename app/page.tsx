import Link from "next/link";
import "./page.css";
import HLogo from "@/components/HLogo";

export default function Home() {
  return (
    <main className="d-flex flex-column bg-gradient-gray justify-content-center align-items-center gap-4 min-h-screen">
      <HLogo width={300} />
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
