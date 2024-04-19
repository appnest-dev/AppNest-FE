import TableComp from "react-bootstrap/Table";
import Paginator from "./Paginator";
import Modal from "../modal/Modal";
import { InputProps } from "@/components/form/Input";

export type TableProps = {
  heads: InputProps[];
  rows: Array<{ [key: string]: number | string | boolean }>;
};

export default function Table({ heads, rows }: TableProps) {
  return (
    <>
      <TableComp striped>
        <thead>
          <tr>
            <th>#</th>
            {heads.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {heads.map((item, ind) => (
                <td key={ind}>
                  {typeof row[item.id] === "boolean"
                    ? row[item.id] === true
                      ? "Yes"
                      : "No"
                    : row[item.id] === ""
                    ? "-"
                    : row[item.id]}
                </td>
              ))}
              <td className="d-flex gap-3">
                <Modal
                  buttonTitle="U"
                  inputs={heads.map((item) => ({
                    ...item,
                    value: row[item.id],
                  }))}
                  title="Update"
                  submit={async (values) => {
                    console.log(values);
                  }}
                />

                <Modal
                  buttonTitle="D"
                  inputs={heads.map((item) => ({
                    ...item,
                    disabled: true,
                    value: row[item.id],
                  }))}
                  title="Delete"
                  submit={async (values) => {
                    console.log(values);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableComp>
      <Paginator />
    </>
  );
}
