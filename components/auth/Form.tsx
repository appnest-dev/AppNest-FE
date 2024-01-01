import { Formik, Form } from "formik";

import "./styles.css";
import ActionLink from "./ActionLink";
import React, { ReactNode } from "react";

type Values = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
  OTC?: string;
};

export default function FormComponent({
  title,
  actions,
  google,
  children,
}: {
  title: string;
  actions: object;
  google?: boolean;
  children: ReactNode;
}) {
  const initialValues = {};
  const handleSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <>
      <section className="form mx-auto">
        <h2 className="text-center fs-6 fw-semibold pb-4">{title}</h2>

        {google && (
          <button className="mt-2 bg-gray w-100 py-2 fw-semibold">
            Continue with Google
          </button>
        )}

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>{children}</Form>
          )}
        </Formik>
        <div className="d-flex justify-content-between pt-5">
          {Object.entries(actions).map((key) => (
            <ActionLink key={key[0]} to={key[1]} title={key[0]} />
          ))}
        </div>
      </section>
    </>
  );
}
