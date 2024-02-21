import { Button } from "react-bootstrap";

export default function Submit({ title }: { title: string }) {
  return (
    <Button
      variant="secondary"
      type="submit"
      className="mt-4 w-100 py-2 fw-semibold"
    >
      {title}
    </Button>
  );
}
