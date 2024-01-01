"use client";

import Form from "@/components/auth/Form";
import Input from "@/components/auth/Input";
import Submit from "@/components/auth/Submit";

export default function page() {
  const actions = {
    "Remember Password?": "/auth",
    "Register Now": "/auth/register",
  };

  return (
    <>
      <Form title="Forgot Password?" actions={actions}>
        <Input id="email" title="Email" type="email" placeholder="Your Email" />
        <Submit title="Send Recovery Email" />
      </Form>
    </>
  );
}
