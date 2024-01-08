"use client";

import Form from "@/components/auth/Form";

export default function page() {
  const actions = {
    "Remember Password?": "/auth",
    "Register Now": "/auth/register",
  };

  const inputs = [
    {
      id: "email",
      title: "Email",
      type: "email",
      placeholder: "Your Email",
    },
  ];

  return (
    <Form
      title="Forgot Password?"
      submitTitle="Send Recovery Email"
      actions={actions}
      inputs={inputs}
    />
  );
}
