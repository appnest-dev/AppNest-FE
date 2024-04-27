import { getAllProjects } from "@/app/services/example";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import { TableProps } from "@/components/dashboard/table/Table";
import TableTemplate from "@/components/dashboard/TableTemplate";
import { InputProps } from "@/components/form/Input";
import { generatePlaceholder } from "@/utils/functions";

export default async function page() {
  const heads: InputProps[] = [
    {
      id: "title",
      title: "Project Title",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      id: "id",
      title: "Project ID",
      excludeInForm: true,
      type: "text",
      required: true,
    },
    {
      id: "members",
      title: "Project Members",
      type: "text",
      required: true,
    },
    {
      id: "brandGuideline",
      title: "Brand Guideline URL",
      type: "url",
      required: true,
    },
    {
      id: "uiux",
      title: "UI / UX URL",
      type: "url",
      required: true,
    },
    {
      id: "uml",
      title: "UML URL",
      type: "url",
      required: true,
    },
    {
      id: "feRepo",
      title: "FE Repo URL",
      type: "url",
      required: true,
    },
    {
      id: "beRepo",
      title: "BE Repo URL",
      type: "url",
      required: true,
    },
    {
      id: "lastUpdated",
      title: "Last Updated",
      excludeInForm: true,
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
    inputs: heads,
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
