"use client";

import { Accordion } from "react-bootstrap";
import TableTemplate from "../TableTemplate";
import React from "react";

export type ModelProps = {
  title: string;
  properties: {
    uniqueKey: string;
    name: string;
    type: string;
    required: string;
    defaultValue: string;
    regex: string;
    unique: string;
  }[];
  relations: {
    modal1: string;
    modal2: string;
    relation: string;
  }[];
  endpoints: {
    name: string;
    coverage: string;
    type: string;
  }[];
};

const ModelsLayout: React.FC<{ data: ModelProps[] }> = ({ data }) => {
  const titles = [
    { table: "Properties", modal: "Create Property" },
    { table: "Relations", modal: "Create Relation" },
    { table: "Endpoints", modal: "Create Endpoint" },
  ];

  const heads = [
    [
      "Unique Key",
      "Name",
      "Type",
      "Required?",
      "Default Value",
      "Regex",
      "Unique?",
    ],
    ["Modal 1", "Modal 2", "Relation"],
    ["Name", "Coverage", "Type"],
  ];
  return (
    <>
      {data.map((values, mainIndex) => (
        <Accordion alwaysOpen key={values.title}>
          <Accordion.Item eventKey={`${mainIndex}`}>
            <Accordion.Header>{values.title}</Accordion.Header>
            <Accordion.Body>
              {[values.properties, values.relations, values.endpoints].map(
                (value, index) => (
                  <TableTemplate
                    key={index}
                    heads={heads[index]}
                    rows={value.map((row) => Object.values(row))}
                    title={titles[index].table}
                    modalProps={{
                      title: titles[index].modal,
                      inputs: heads[index].map((key) => ({
                        id: key,
                        type: "text",
                        title: key,
                      })),
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
