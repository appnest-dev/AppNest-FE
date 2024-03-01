"use client";

import { Button } from "react-bootstrap";
import Form from "../../form/Form";
import { useRef } from "react";
import { InputProps } from "@/components/form/Input";
import { Values } from "@/components/form/functions/validate";

export type ModalProps = {
  title: string;
  inputs: InputProps[];
  submit: (values: Values) => void;
};

export default function Modal({ inputs, title, submit }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          containerRef.current?.classList.replace("d-none", "d-flex");
        }}
      >
        New
      </Button>
      <div
        className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-black bg-opacity-25 d-none justify-content-center align-items-center"
        ref={containerRef}
      >
        <div className="d-flex flex-column gap-3 w-75">
          <Button
            variant="light"
            style={{ width: 50 }}
            className="align-self-end"
            onClick={() =>
              containerRef.current?.classList.replace("d-flex", "d-none")
            }
          >
            X
          </Button>
          <Form
            title={title}
            className="mw-100 w-100 rounded-1"
            inputs={inputs}
            submitTitle="Submit"
            onSubmit={submit}
          />
        </div>
      </div>
    </>
  );
}
