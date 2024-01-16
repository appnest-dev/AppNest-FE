"use client";

import Form from "@/components/auth/Form";

export default function page() {
  const actions = {
    "Forgot Password?": "/auth/forgot",
    "Register Now": "/auth/register",
  };

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
      google
      inputs={inputs}
    />
  );
}
