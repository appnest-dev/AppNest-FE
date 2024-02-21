import { Field } from "formik";
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
}: InputProps & ControlledInputProps) {
  return (
    <Form.Group className="d-flex flex-column">
      <Form.Label htmlFor={id} className="fw-semibold">
        {title}
        {required && <span className="required-star"> * </span>}
      </Form.Label>
      <Form.Control
        as={Field}
        type={type}
        id={id}
        onChange={handleChange}
        value={values[id]}
        placeholder={placeholder}
        name={id}
        className="bg-light px-3 py-2"
      />
    </Form.Group>
  );
}
