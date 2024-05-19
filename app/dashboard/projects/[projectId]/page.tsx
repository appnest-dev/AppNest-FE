import { getProjectDashboard } from "@/app/services/example";

export default async function page({
  params,
}: {
  params: { projectId: string };
}) {
  const data = await getProjectDashboard().then((res) => res);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  const formattedData = data.map((section) => ({
    title: section.title,
    examples: formatter.format(section.examples).replace(/, and /g, " & "),
  }));
  return (
    <section className="p-4 w-100 d-flex flex-column gap-4">
      <h2>Project {params.projectId} Dashboard</h2>
      <div className="border border-dark row rounded-1 w-100">
        {formattedData.map((section, index) => (
          <section
            key={index}
            className={`border border-dark p-3 ${index < 2 && "col"}`}
          >
            <h3>{section.title}</h3>
            <div className="w-50 text-truncate ">{section.examples}</div>
          </section>
        ))}
      </div>
    </section>
  );
}
