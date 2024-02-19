"use client";

import Form from "@/components/form/Form";

export default function page() {
  const actions = [
    { title: "Remember Password?", link: "/auth" },
    { title: "Register Now", link: "/auth/register" },
  ];

  const inputs = [
    {
      id: "OTC",
      title: "One-Time Code",
      type: "number",
      placeholder: "Your OTC",
      required: true,
    },
    {
      id: "newPassword",
      title: "New Password",
      type: "password",
      placeholder: "Your New Password",
      required: true,
    },
    {
      id: "newPasswordConfirmation",
      title: "New Password Confirmation",
      type: "password",
      placeholder: "Your New Password Confirmation",
      required: true,
      confirmationId: "newPassword",
    },
  ];

  return (
    <Form
      title="Reset Password"
      submitTitle="Reset Password"
      actions={actions}
      onSubmit={(values) => console.log(values)}
      inputs={inputs}
    />
  );
}
