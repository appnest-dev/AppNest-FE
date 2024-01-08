"use client";

import Form from "@/components/auth/Form";

export default function page() {
  const actions = {
    "Remember Password?": "/auth",
    "Register Now": "/auth/register",
  };

  const inputs = [
    {
      id: "OTC",
      title: "One-Time Code",
      type: "number",
      placeholder: "Your OTC",
    },
    {
      id: "newPassword",
      title: "New Password",
      type: "password",
      placeholder: "Your New Password",
    },
    {
      id: "newPasswordConfirmation",
      title: "New Password Confirmation",
      type: "password",
      placeholder: "Your New Password Confirmation",
    },
  ];

  return (
    <Form
      title="Reset Password"
      submitTitle="Reset Password"
      actions={actions}
      inputs={inputs}
    />
  );
}
