import TableComp from "react-bootstrap/Table";
import Paginator from "./Paginator";
import Modal from "../modal/Modal";
import { InputProps } from "@/components/form/Input";
import { Values } from "@/components/form/functions/validate";
import { Button } from "react-bootstrap";

export type TableProps = {
  heads: InputProps[];
  rows: Array<{ [key: string]: number | string | boolean }>;
  onUpdate: (values: Values) => void;
  onDelete: (values: Values) => void;
  customActions?: {
    content: any;
    onClick: () => void;
  }[];
};

export default function Table({
  heads,
  rows,
  onUpdate,
  onDelete,
  customActions,
}: TableProps) {
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
                  onCreate={async (values) => {
                    onUpdate(values);
                  }}
                />

                <Modal
                  buttonTitle="D"
                  inputs={heads.map((item) => ({
                    ...item,
                    required: false,
                    disabled: true,
                    value: row[item.id],
                  }))}
                  title="Delete"
                  onCreate={async (values) => {
                    onDelete(values);
                  }}
                />

                {customActions &&
                  customActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="light"
                      onClick={async () => {
                        action.onClick();
                      }}
                    >
                      {action.content}
                    </Button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </TableComp>
      <Paginator />
    </>
  );
}
