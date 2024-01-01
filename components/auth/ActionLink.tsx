import Link from "next/link";

export default function ActionLink({
  to,
  title,
}: {
  to: string;
  title: string;
}) {
  return (
    <Link href={to} className="action-link fw-semibold">
      {title}
    </Link>
  );
}
