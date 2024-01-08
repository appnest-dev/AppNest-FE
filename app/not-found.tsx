import Image from "next/image";
import hLogo from "@/public/h-logo.png";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Image src={hLogo} alt="App Nest" />
      <h1>404</h1>
      <h2>Opps, Requested Page Isn&apos;t Available.</h2>
    </main>
  );
}
