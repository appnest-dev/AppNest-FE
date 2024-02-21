import { Field } from "formik";
import { Form } from "react-bootstrap";

export type InputProps = {
  type: string;
  title: string;
  id: string;
  placeholder: string;
  min?: number;
  max?: number;
  required: boolean;
  confirmationId?: string;
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
}: InputProps) {
  return (
    <Form.Group className="d-flex flex-column">
      <Form.Label htmlFor={id} className="fw-semibold">
        {title}
        {required && <span className="required-star"> * </span>}
      </Form.Label>
      <Form.Control
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
        className="bg-gray px-3 py-2"
      />
    </Form.Group>
  );
}
