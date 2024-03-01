"use client";

import Form from "@/components/form/Form";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const actions = [
    { title: "Forgot Password?", link: "/auth/forgot" },
    { title: "Register Now", link: "/auth/register" },
  ];

  const inputs = [
    {
      id: "email",
      title: "Email",
      type: "email",
      placeholder: "Your Email",
      required: true,
    },
    {
      id: "password",
      title: "Password",
      type: "password",
      placeholder: "Your Password",
      required: true,
    },
  ];

  return (
    <Form
      title="Login"
      submitTitle="Login"
      actions={actions}
      onSubmit={(values) => {
        console.log(values);
        localStorage.setItem(`token`, `test`);
        router.push("/dashboard");
      }}
      google
      inputs={inputs}
    />
  );
}
