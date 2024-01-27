"use client";

import Form from "@/components/form/Form";

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
      required: true,
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
