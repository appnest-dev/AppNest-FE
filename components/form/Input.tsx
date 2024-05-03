import { Field } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";

export type InputProps = {
  type: string;
  title: string;
  id: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
  confirmationId?: string;
  value?: string | boolean | number;
  disabled?: boolean;
  checked?: boolean;
  excludeInForm?: boolean;
  excludeInTable?: boolean;
};

type ControlledInputProps = {
  handleChange: (e: object) => void;
  values: any;
};

export default function Input({
  type,
  id,
  title,
  placeholder,
  min,
  max,
  required,
  confirmationId,
  handleChange,
  values,
  disabled = false,
}: InputProps & ControlledInputProps) {
  const [state, setState] = useState(values[id] as boolean | false);
  return (
    <Form.Group className="d-flex flex-column">
      <Form.Label htmlFor={id} className="fw-semibold">
        {title}
        {required && <span className="required-star"> * </span>}
      </Form.Label>
      {type == "switch" ? (
        <Form.Check
          type="switch"
          id={id}
          checked={state}
          onChange={(e) => {
            setState((prev) => !prev);
            handleChange(e);
          }}
        />
      ) : (
        <Form.Control
          as={Field}
          type={type}
          id={id}
          onChange={handleChange}
          value={values[id]}
          placeholder={placeholder}
          name={id}
          className="bg-light px-3 py-2"
          disabled={disabled}
        />
      )}
    </Form.Group>
  );
}
