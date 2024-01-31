"use client";

import Form from "@/components/form/Form";

export default function page() {
  const actions = [
    { title: "Forgot Password?", link: "/auth/forgot" },
    { title: "Have Account?", link: "/auth" },
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
      onSubmit={(values) => console.log(values)}
      google
      inputs={inputs}
    />
  );
}
