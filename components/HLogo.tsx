import Image from "next/image";
import hLogo from "@/public/h-logo.png";

export default function HLogo({ className }: { className?: string }) {
  return (
    <div style={{ mixBlendMode: "multiply" }} className={`h-logo ${className}`}>
      <Image src={hLogo} alt="App Nest" className="w-100 h-100" />
    </div>
  );
}
