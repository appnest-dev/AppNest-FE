import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import { getAllAccessRules } from "@/app/services/example";
import { generatePlaceholder } from "@/utils/functions";
import { InputProps } from "@/components/form/Input";

export default async function page() {
  const placeholder = generatePlaceholder("Your Access Rule");
  const heads: InputProps[] = [
    {
      id: "modals",
      title: "Modals",
      type: "text",
      required: true,
      placeholder: placeholder("Modals"),
    },
    {
      id: "endpoints",
      title: "Endpoint",
      type: "text",
      required: true,
      placeholder: placeholder("Endpoints"),
    },
    {
      id: "userTypes",
      title: "User Types",
      type: "text",
      required: true,
      placeholder: placeholder("User Types"),
    },
    {
      id: "haveAccess",
      title: "Have Access?",
      type: "switch",
    },
    {
      id: "fixed",
      title: "Fixed?",
      type: "switch",
    },
  ];

  const rows = await getAllAccessRules().then((res) => res);

  const tableProps: TableProps = {
    heads: heads,
    rows: rows,
    onUpdate: async (values) => {
      "use server";
      console.log(values);
    },
    onDelete: async (values) => {
      "use server";
      console.log(values);
    },
  };

  const modalProps: ModalProps = {
    title: "Create a project",
    inputs: heads,
    onCreate: async (values) => {
      "use server";
      console.log(values);
    },
  };

  return (
    <TableTemplate
      title="Access Rules"
      modalProps={modalProps}
      tableProps={tableProps}
    />
  );
}
