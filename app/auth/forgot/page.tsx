"use client";

import Form from "@/components/form/Form";

export default function page() {
  const actions = [
    { title: "Remember Password?", link: "/auth" },
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
  ];

  return (
    <Form
      title="Forgot Password?"
      submitTitle="Send Recovery Email"
      actions={actions}
      onSubmit={(values) => console.log(values)}
      inputs={inputs}
    />
  );
}
