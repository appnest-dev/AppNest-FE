import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import { getAllProjects } from "@/app/services/example";
import { InputProps } from "@/components/form/Input";
import { generatePlaceholder } from "@/utils/functions";

export default async function page() {
  const heads: InputProps[] = [
    {
      id: "projects",
      title: "projects",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      id: "modals",
      title: "Modals",
      type: "text",
      required: true,
    },
    {
      id: "userTypes",
      title: "User Types",
      type: "text",
      required: true,
    },
    {
      id: "lastUpdated",
      title: "Last Updated",
      type: "text",
      required: true,
    },
    {
      id: "details",
      title: "Details",
      type: "text",
      required: true,
    },
  ];

  const rows = await getAllProjects().then((res) => res);

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
