import Link from "next/link";

export type Actions = {
  title: string;
  link: string;
};

export default function ActionLink({ link, title }: Actions) {
  return (
    <Link href={link} className="action-link fw-semibold">
      {title}
    </Link>
  );
}
