export default function Submit({ title }: { title: string }) {
  return (
    <button type="submit" className="mt-4 bg-gray w-100 py-2 fw-semibold">
      {title}
    </button>
  );
}
