"use client";

import Form from "@/components/auth/Form";
import Input from "@/components/auth/Input";
import Submit from "@/components/auth/Submit";

export default function page() {
  const actions = {
    "Have Account?": "/auth",
  };

  return (
    <>
      <Form title="Forgot Password?" actions={actions} google>
        <Input id="email" title="Email" type="email" placeholder="Your Email" />
        <Input
          id="password"
          title="password"
          type="password"
          placeholder="Your Password"
        />
        <Input
          id="passwordConfirmation"
          title="password Confirmation"
          type="password"
          placeholder="Your Password Confirmation"
        />
        <Submit title="Register" />
      </Form>
    </>
  );
}
