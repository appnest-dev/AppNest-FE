import { getAllModels } from "@/app/services/example";
import Modal from "@/components/dashboard/modal/Modal";
import ModelsLayout from "@/components/dashboard/models/ModelsLayout";
import { InputProps } from "@/components/form/Input";

export default async function page() {
  const inputs: InputProps[] = [
    {
      id: "name",
      title: "Name",
      type: "text",
      placeholder: "Your Model Name",
      required: true,
    },
  ];
  const data = await getAllModels().then((res) => res);

  return (
    <>
      <section
        className="d-flex flex-column w-100 gap-4 p-4"
        style={{ height: "max-content" }}
      >
        <div className="d-flex justify-content-between w-100">
          <h2>Models</h2>
          <Modal
            title="Create Model"
            inputs={inputs}
            submit={async (values) => {
              "use server";
              console.log(values);
            }}
          />
        </div>
        <ModelsLayout data={data} />
      </section>
    </>
  );
}
