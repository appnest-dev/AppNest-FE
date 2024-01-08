import { Formik, Form } from "formik";

import "./styles.css";
import ActionLink from "./ActionLink";
import React, { ReactNode } from "react";
import Input from "./Input";
import Submit from "./Submit";

type Values = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
  OTC?: string;
};

type InputProps = {
  type: string;
  title: string;
  id: string;
  placeholder: string;
};

type Props = {
  title: string;
  actions: object;
  google?: boolean;
  inputs: InputProps[];
  submitTitle: string;
};

export default function FormComponent({
  title,
  actions,
  google,
  inputs,
  submitTitle,
}: Props) {
  const initialValues = {};
  const handleSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <section className="form mx-auto">
      <h2 className="text-center fs-5 fw-semibold pb-4">{title}</h2>

      {google && (
        <button className="mt-2 bg-gray w-100 py-2 fw-semibold">
          Continue with Google
        </button>
      )}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {inputs.map((el) => (
              <Input
                key={el.id}
                id={el.id}
                type={el.type}
                title={el.title}
                placeholder={el.placeholder}
              />
            ))}
            <Submit title={submitTitle} />
          </Form>
        )}
      </Formik>

      <div className="d-flex justify-content-between pt-5">
        {Object.entries(actions).map((key) => (
          <ActionLink key={key[0]} to={key[1]} title={key[0]} />
        ))}
      </div>
    </section>
  );
}
