import { Field } from "formik";
import { Form } from "react-bootstrap";

export type InputProps = {
  type: string;
  title: string;
  id: string;
  placeholder: string;
};

export default function Input({ type, id, title, placeholder }: InputProps) {
  return (
    <Form.Group className="d-flex flex-column my-3">
      <Form.Label htmlFor={id} className="fw-semibold">
        {title}
      </Form.Label>
      <Field
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
        className="bg-gray px-3 py-2"
      />
    </Form.Group>
  );
}
