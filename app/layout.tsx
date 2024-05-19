import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./globals.css";
import Content from "./Content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppNest",
  description: "AppNest - App for development planning management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Content>{children}</Content>
      </body>
    </html>
  );
}
