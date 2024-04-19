"use client";

import Image from "next/image";
import hLogo from "@/public/h-logo.png";
import Section from "./Section";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Logout from "../Logout";
import Link from "next/link";

export default function Aside() {
  useEffect(() => {
    !localStorage.getItem(`token`) && redirect("/auth");
  }, []);

  const data = [
    {
      title: "Per Project",
      list: [
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
      ],
    },
    {
      title: "Per Service",
      list: [
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
      ],
    },
  ];

  return (
    <aside
      className="d-flex flex-column h-screen bg-light overflow-y-hidden"
      style={{ overflowX: "hidden", position: "relative" }}
    >
      <div className="d-flex flex-column h-100 gap-4 overflow-y-auto p-4">
        <Image src={hLogo} alt="App Nest" className="logo" />
        <h6 className="text-danger">Trial Launch</h6>

        <Logout />

        <Link href="/dashboard">Dashboard</Link>

        {data.map((section, index) => (
          <Section key={index} title={section.title} list={section.list} />
        ))}
      </div>

      <small className="px-3 py-2" style={{ zIndex: 10, width: "inherit" }}>
        By{" "}
        <a href="https://www.alembicsoft.com/" target="_blank">
          AlembicSoft
        </a>
        <br />
        All Rights Reserved For AppNest
      </small>
    </aside>
  );
}
