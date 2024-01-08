import Image from "next/image";
import hLogo from "@/public/h-logo.png";

export default function HLogo({ width = 200 }: { width?: number }) {
  return (
    <div style={{ width: `${width}px`, mixBlendMode: "multiply" }}>
      <Image src={hLogo} alt="App Nest" className="w-100 h-100" />
    </div>
  );
}
