"use client";

import { Button } from "react-bootstrap";
import Form from "../../form/Form";
import { useRef } from "react";
import { InputProps } from "@/components/form/Input";
import { Values } from "@/components/form/functions/validate";

export type ModalProps = {
  buttonTitle?: string;
  title: string;
  inputs: InputProps[];
  submit: (values: Values) => void;
};

export default function Modal({
  buttonTitle = "New",
  inputs,
  title,
  submit,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          containerRef.current?.classList.replace("d-none", "d-flex");
          document.body.classList.add("overflow-hidden");
        }}
      >
        {buttonTitle}
      </Button>
      <div
        className="position-fixed z-3 top-50 start-50 translate-middle w-100 h-100 bg-black bg-opacity-25 d-none justify-content-center align-items-center"
        ref={containerRef}
      >
        <div
          className="d-flex flex-column gap-3 w-50 overflow-y-auto py-4"
          style={{ maxHeight: "100dvh" }}
        >
          <Button
            variant="secondary"
            style={{ width: 50, zIndex: 10 }}
            className="align-self-end position-absolute rounded-1 mt-3 me-4"
            onClick={() => {
              containerRef.current?.classList.replace("d-flex", "d-none");
              document.body.classList.remove("overflow-hidden");
            }}
          >
            X
          </Button>
          <Form
            title={title}
            className="mw-100 w-100 rounded-1 overflow-y-auto"
            inputs={inputs}
            submitTitle="Submit"
            onSubmit={submit}
          />
        </div>
      </div>
    </>
  );
}
