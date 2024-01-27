"use client";

import Form from "@/components/Form/Form";

export default function page() {
  const actions = {
    "Forgot Password?": "/auth/forgot",
    "Have Account?": "/auth",
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
    {
      id: "passwordConfirmation",
      title: "Password Confirmation",
      type: "password",
      placeholder: "Your Password Confirmation",
      required: true,
    },
  ];

  return (
    <Form
      title="Register"
      submitTitle="Register"
      actions={actions}
      google
      inputs={inputs}
    />
  );
}
