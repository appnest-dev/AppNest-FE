"use client";

import Image from "next/image";
import hLogo from "@/public/h-logo.png";
import Section from "./Section";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Aside() {
  useEffect(() => {
    !localStorage.getItem(`token`) && redirect("/auth");
  }, []);

  return (
    <aside className="d-flex flex-column h-screen bg-light p-4 gap-4">
      <Image src={hLogo} alt="App Nest" className="logo" />
      <h6 className="text-danger">Trial Launch</h6>

      <Logout />

      <Link href="/dashboard">Dashboard</Link>

      <Section
        title="Per Project"
        list={[
          {
            mainTitle: "Project 1",
            listItems: [
              { title: "M | Modals", href: "#" },
              { title: "U | User Types", href: "#" },
            ],
          },
          {
            mainTitle: "Project 2",
            listItems: [
              { title: "M | Modals", href: "#" },
              { title: "U | User Types", href: "#" },
            ],
          },
        ]}
      />

      <Section
        title="Per Service"
        list={[
          {
            mainTitle: "M | Modals",
            listItems: [
              { title: "project 1", href: "#" },
              { title: "project 2", href: "#" },
            ],
          },
          {
            mainTitle: "U | User Types",
            listItems: [
              { title: "project 1", href: "#" },
              { title: "project 2", href: "#" },
            ],
          },
        ]}
      />
    </aside>
  );
}
