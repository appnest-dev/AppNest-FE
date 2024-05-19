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
      confirmationId: "password",
    },
    {
      id: "role",
      title: "Role",
      type: "select",
      placeholder: "Select, project manager or project member",
      required: true,
      options: ["Project manager", "Project member"],
    },
    // FIXME: make project id not required when role isn't project member
    {
      id: "projectId",
      title: "Project ID(s)",
      type: "text",
      placeholder: "If project member is selected",
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
