"use client";

import { Formik, Form, ErrorMessage } from "formik";

import "./styles.css";
import ActionLink, { Actions } from "./ActionLink";
import React, { useEffect } from "react";
import Input, { InputProps } from "./Input";
import Submit from "./Submit";
import { redirect, useRouter } from "next/navigation";
import { Values, validate } from "./functions/validate";
import { ValidationTypes, validation } from "@/utils/consts";
import { generateInitialValue } from "./functions/generateInitialValue";
import { Button } from "react-bootstrap";
import Google from "@/public/google.png";
import Image from "next/image";

type Props = {
  title: string;
  actions: Actions[];
  onSubmit: (values: Values) => void;
  google?: boolean;
  inputs: InputProps[];
  submitTitle: string;
};

export default function FormComponent({
  title,
  actions,
  onSubmit,
  google,
  inputs,
  submitTitle,
}: Props) {
  const initialValues = inputs.reduce((prev, curr) => {
    return { ...prev, [curr.id]: generateInitialValue(curr.type) };
  }, {});

  const router = useRouter();

  useEffect(() => {
    localStorage.getItem(`token`) && redirect("/dashboard");
  }, []);

  const handleSubmit = (values: Values) => {
    onSubmit(values);
    localStorage.setItem(`token`, `test`);
    router.push("/dashboard");
  };

  return (
    <section className="form mx-auto bg-white">
      <h2 className="text-center fs-5 fw-semibold pb-4">{title}</h2>

      {google && (
        <Button variant="light" className="my-2 p-2 w-100 fw-semibold">
          <Image
            src={Google}
            alt="google"
            width={25}
            height={25}
            className="me-1"
          />
          Continue with Google
        </Button>
      )}

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => validate(values, inputs)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            {inputs.map((el) => (
              <div key={el.id} className="field">
                <Input
                  id={el.id}
                  type={el.type}
                  title={el.title}
                  placeholder={el.placeholder}
                  required={el.required}
                  handleChange={(e) => handleChange(e)}
                  values={values}
                />
                <ErrorMessage name={el.id}>
                  {(msg) => (
                    <span className="text-danger py-1">
                      {msg}{" "}
                      {validation[el.type as keyof ValidationTypes] && (
                        <div key={el.id} className="validation-msg-btn">
                          <span>?</span>
                          <span className="validation-msg">
                            {validation[el.type as keyof ValidationTypes].msg}
                          </span>
                        </div>
                      )}
                    </span>
                  )}
                </ErrorMessage>
              </div>
            ))}
            <Submit title={submitTitle} />
          </Form>
        )}
      </Formik>

      <div className="d-flex justify-content-between pt-5">
        {actions.map((key) => (
          <ActionLink key={key.title} link={key.link} title={key.title} />
        ))}
      </div>
    </section>
  );
}
