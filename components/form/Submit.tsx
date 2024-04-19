import { Button, Spinner } from "react-bootstrap";

export default function Submit({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) {
  return (
    <Button
      variant="light"
      type="submit"
      className="mt-4 w-100 p-2 fw-semibold"
      disabled={disabled}
    >
      {disabled ? (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        title
      )}
    </Button>
  );
}
