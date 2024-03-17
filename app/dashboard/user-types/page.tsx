import { getAllUserTypes } from "@/app/services/example";
import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";

export default async function page() {
  const heads = ["Unique Key", "Name", "Description"];

  const rows = await getAllUserTypes().then((res) =>
    res.map((row) => Object.values(row))
  );

  const tableProps: TableProps = {
    heads: heads,
    rows: rows,
  };

  const modalProps: ModalProps = {
    title: "Create User Type",
    inputs: heads.map((head) => {
      return {
        id: head,
        title: head,
        type: "text",
        placeholder: `Your Project User Type ${head}`,
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
      title="User Types"
      modalProps={modalProps}
      heads={tableProps.heads}
      rows={tableProps.rows}
    />
  );
}
