"use client";

import { Formik, Form, ErrorMessage } from "formik";

import "./styles.css";
import ActionLink, { Actions } from "./ActionLink";
import React, { useEffect } from "react";
import Input, { InputProps } from "./Input";
import Submit from "./Submit";
import { redirect, useRouter } from "next/navigation";

type Auth = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
  OTC?: string;
};

type Values = Auth;

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
    return { ...prev, [curr.id]: "" };
  }, {});

  const validation = {
    email: {
      regExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      msg: "example@gmail.com (min 10 characters, max 40 characters)",
      min: 10,
      max: 40,
    },
    password: {
      regExp:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/,
      msg: "Min 8 characters, max 30 characters, at least one letter, number and special character",
      min: 8,
      max: 30,
    },
  };

  const router = useRouter();

  useEffect(() => {
    localStorage.getItem(`token`) && redirect("/dashboard");
  }, []);

  const handleSubmit = (values: Values) => {
    onSubmit(values);
    localStorage.setItem(`token`, `test`);
    router.push("/dashboard");
  };

  // under refactoring
  const validate = (values: Values) => {
    let errors: Values = {};

    Object.entries(values).forEach((el, index) => {
      if (el[1] === "" && inputs[index].required) {
        errors[inputs[index].id as keyof Values] = "This is required";
        //
      } else if (
        el[1] !== "" &&
        inputs[index].required &&
        !inputs[index].id.toLowerCase().includes("confirmation")
      ) {
        Object.entries(validation).forEach((input) => {
          if (
            el[0].toLowerCase().includes(input[0].toLowerCase()) &&
            (!input[1].regExp.test(el[1]) ||
              (input[1].min && el[1].length < input[1].min) ||
              (input[1].max && el[1].length > input[1].max))
          ) {
            errors[
              inputs[index].id as keyof Values
            ] = `Invalid ${inputs[index].type}`;
          }
        });
      } else if (inputs[index].id.toLowerCase().includes("confirmation")) {
        Object.entries(values).forEach((ele, ind) => {
          if (index - 1 === ind && ele[1] !== el[1]) {
            errors[inputs[index].id as keyof Values] = `Password doesn't match`;
          }
        });
      }
    });

    return errors;
  };

  return (
    <section className="form mx-auto bg-white">
      <h2 className="text-center fs-5 fw-semibold pb-4">{title}</h2>

      {google && (
        <button className="mt-2 bg-gray w-100 py-2 fw-semibold">
          Continue with Google
        </button>
      )}

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {inputs.map((el) => (
              <div key={el.id} className="field">
                <Input
                  id={el.id}
                  type={el.type}
                  title={el.title}
                  placeholder={el.placeholder}
                  required={el.required}
                />
                <ErrorMessage name={el.id}>
                  {(msg) => (
                    <span className="text-danger py-1">
                      {msg}{" "}
                      {Object.entries(validation).map(
                        (input, index) =>
                          input[0] == el.type &&
                          msg.toLowerCase().includes("invalid") && (
                            <div key={index} className="validation-msg-btn">
                              <span>?</span>
                              <span className="validation-msg">
                                {input[1].msg}
                              </span>
                            </div>
                          )
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
