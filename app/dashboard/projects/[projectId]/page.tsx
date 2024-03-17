import { getProjectDashboard } from "@/app/services/example";

export default async function page({
  params,
}: {
  params: { projectId: string };
}) {
  const data = await getProjectDashboard().then((res) => res);
  return (
    <section className="p-4 w-100 d-flex flex-column gap-4">
      <h2>Project {params.projectId} Dashboard</h2>
      <div className="border border-dark row rounded-1 w-100">
        {data.map((section, index) => (
          <section
            key={index}
            className={`border border-dark p-3 ${
              index < data.length - 1 && "col"
            }`}
          >
            <h3>{section.title}</h3>
            <div className="w-50 text-truncate">
              {section.examples.join(", ")}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
