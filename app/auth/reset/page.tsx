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
      <Form title="Reset Password" actions={actions}>
        <Input
          id="OTC"
          title="One-Time Code"
          type="number"
          placeholder="Your OTC"
        />
        <Input
          id="newPassword"
          title="New Password"
          type="password"
          placeholder="Your New Password"
        />
        <Input
          id="newPasswordConfirmation"
          title="New Password Confirmation"
          type="password"
          placeholder="Your New Password Confirmation"
        />
        <Submit title="Reset Password" />
      </Form>
    </>
  );
}
