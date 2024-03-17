import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import { getAllProjects } from "@/app/services/example";

export default async function page() {
  const heads = ["projects", "Modals", "User Types", "Last Updated", "Details"];

  const rows = await getAllProjects().then((res) =>
    res.map((row) => Object.values(row))
  );

  const tableProps: TableProps = {
    heads: heads,
    rows: rows,
  };

  const modalProps: ModalProps = {
    title: "Create a project",
    inputs: [
      {
        id: "projectName",
        title: "Name",
        type: "text",
        placeholder: "Your Project Name",
        required: true,
      },
    ],
    submit: async (values) => {
      "use server";
      console.log(values);
    },
  };

  return (
    <TableTemplate
      title="Projects"
      modalProps={modalProps}
      heads={tableProps.heads}
      rows={tableProps.rows}
    />
  );
}
