import Section from "@/components/dashboard/Section";
import { ModalProps } from "@/components/dashboard/modal/Modal";
import Table from "@/components/dashboard/table/Table";

export default function page() {
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
    <>
      <Section title="Projects" modalProps={modalProps}>
        <Table
          heads={[
            "projects",
            "Modals",
            "User Types",
            "Last Updated",
            "Details",
          ]}
          rows={[
            ["test", "test", "test", "", "test"],
            ["test", "", "test", "test", "test"],
          ]}
        />
      </Section>
    </>
  );
}
