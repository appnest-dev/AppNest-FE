import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import { getAllAccessRules } from "@/app/services/example";
import { removeMark, toCamelCase } from "@/utils/functions";

export default async function page() {
  const heads = ["Modals", "Endpoint", "User Types", "Have Access?", "Fixed?"];

  const rows = await getAllAccessRules().then((res) =>
    res.map((row) => Object.values(row))
  );

  const tableProps: TableProps = {
    heads: heads,
    rows: rows,
  };

  const modalProps: ModalProps = {
    title: "Create a project",
    inputs: heads.map((head) => {
      return {
        id: head,
        title: head,
        type: "text",
        placeholder: `Your Access Rule ${removeMark(head)}`,
        required: true,
      };
    }),
    submit: async (values) => {
      "use server";
      console.log(values);
    },
  };

  return (
    <TableTemplate
      title="Access Rules"
      modalProps={modalProps}
      heads={tableProps.heads}
      rows={tableProps.rows}
    />
  );
}
