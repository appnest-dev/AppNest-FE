import TableComp from "react-bootstrap/Table";
import Paginator from "./Paginator";
import Modal from "../modal/Modal";
import { toCamelCase } from "@/utils/functions";

export type TableProps = {
  heads: string[];
  rows: string[][];
};

export default function Table({ heads, rows }: TableProps) {
  return (
    <>
      <TableComp striped>
        <thead>
          <tr>
            <th>#</th>
            {heads.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {row.map((item, ind) => (
                <td key={ind}>{item === "" ? "-" : item}</td>
              ))}
              <td className="d-flex gap-3">
                <Modal
                  buttonTitle="U"
                  inputs={heads.map((headCell, ind) => {
                    return {
                      id: toCamelCase(headCell),
                      title: headCell,
                      type: "text",
                      value: row[ind],
                    };
                  })}
                  title="Update"
                  submit={async (values) => {
                    console.log(values);
                  }}
                />

                <Modal
                  buttonTitle="D"
                  inputs={heads.map((headCell, ind) => {
                    return {
                      id: toCamelCase(headCell),
                      title: headCell,
                      type: "text",
                      value: row[ind],
                      disabled: true,
                    };
                  })}
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
