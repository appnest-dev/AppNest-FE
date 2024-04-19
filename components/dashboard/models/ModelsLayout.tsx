"use client";

import { Accordion } from "react-bootstrap";
import TableTemplate from "../TableTemplate";
import React from "react";
import { InputProps } from "@/components/form/Input";

export type ModelProps = {
  title: string;
  properties: Array<{ [key: string]: string | number | boolean }>;
  relations: Array<{ [key: string]: string | number | boolean }>;
  endpoints: Array<{ [key: string]: string | number | boolean }>;
};

type Props = {
  properties: InputProps[];
  relations: InputProps[];
  endpoints: InputProps[];
};

const ModelsLayout: React.FC<{ data: ModelProps[] }> = ({ data }) => {
  const titles = [
    { id: "properties", table: "Properties", modal: "Create Property" },
    { id: "relations", table: "Relations", modal: "Create Relation" },
    { id: "endpoints", table: "Endpoints", modal: "Create Endpoint" },
  ];

  const heads: Props = {
    properties: [
      { id: "uniqueKey", title: "Unique Key", type: "text", required: true },
      { id: "name", title: "Name", type: "text", required: true },
      { id: "type", title: "Type", type: "text", required: true },
      { id: "required", title: "Required?", type: "switch" },
      {
        id: "defaultValue",
        title: "Default Value",
        type: "text",
        required: false,
      },
      { id: "regex", title: "Regex", type: "text", required: true },
      { id: "unique", title: "Unique?", type: "switch" },
    ],
    relations: [
      { id: "modal1", title: "Modal 1", type: "text", required: true },
      { id: "modal2", title: "Modal 2", type: "text", required: true },
      { id: "relation", title: "Relation", type: "text", required: true },
    ],
    endpoints: [
      { id: "name", title: "Name", type: "text", required: true },
      { id: "coverage", title: "Coverage", type: "text", required: true },
      { id: "type", title: "Type", type: "text", required: true },
    ],
  };

  return (
    <>
      {data.map((values: ModelProps, mainIndex) => (
        <Accordion alwaysOpen key={values.title}>
          <Accordion.Item eventKey={`${mainIndex}`}>
            <Accordion.Header>{values.title}</Accordion.Header>
            <Accordion.Body>
              {values[titles[mainIndex].id as keyof Props].map(
                (_, index, value) => (
                  <TableTemplate
                    key={index}
                    title={titles[index].table}
                    heads={heads[titles[mainIndex].id as keyof Props].map(
                      (head) => head
                    )}
                    rows={value}
                    modalProps={{
                      title: titles[index].modal,
                      inputs: heads[titles[mainIndex].id as keyof Props],
                      submit: async (values) => {
                        console.log(values);
                      },
                    }}
                  />
                )
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default ModelsLayout;
