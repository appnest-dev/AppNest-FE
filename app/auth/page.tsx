"use client";

import Form from "@/components/form/Form";

export default function page() {
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
      onSubmit={(values) => console.log(values)}
      google
      inputs={inputs}
    />
  );
}
