"use client";

import Form from "@/components/auth/Form";
import Input from "@/components/auth/Input";
import Submit from "@/components/auth/Submit";

export default function page() {
  return (
    <>
      <Form
        title="Login"
        actions={{
          "Forgot Password?": "/auth/forgot",
          "Register Now": "/auth/register",
        }}
        google
      >
        <Input id="email" title="Email" type="email" placeholder="Your Email" />
        <Input
          id="password"
          title="Password"
          type="password"
          placeholder="Your Password"
        />
        <Submit title="Login" />
      </Form>
    </>
  );
}
