import { getAllUserTypes } from "@/app/services/example";
import TableTemplate from "@/components/dashboard/TableTemplate";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import { InputProps } from "@/components/form/Input";
import { generatePlaceholder } from "@/utils/functions";

export default async function page() {
  const placeholder = generatePlaceholder("Your Project User Type");
  const heads: InputProps[] = [
    {
      id: "uniqueKey",
      title: "Unique Key",
      type: "text",
      required: true,
      placeholder: placeholder("Unique Key"),
    },
    {
      id: "name",
      title: "Name",
      type: "text",
      required: true,
      placeholder: placeholder("Name"),
    },
    {
      id: "description",
      title: "Description",
      type: "text",
      required: true,
      placeholder: placeholder("Description"),
    },
  ];
  const rows = await getAllUserTypes().then((res) => res);

  const tableProps: TableProps = {
    heads: heads,
    rows: rows,
  };

  const modalProps: ModalProps = {
    title: "Create User Type",
    inputs: heads,
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
