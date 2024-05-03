import { InputProps } from "@/components/form/Input";
import { Values } from "@/components/form/functions/validate";
import { Button } from "react-bootstrap";
import TableComp from "react-bootstrap/Table";

import Modal from "../modal/Modal";
import Paginator from "./Paginator";

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

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Table({
  heads,
  rows,
  onUpdate,
  onDelete,
  customActions,
}: TableProps) {
  const extractWebsiteName = (url = "") =>
    new URL(url).hostname
      .replace("www.", "")
      .replace(".com", "")
      .replace(".net", "")
      .replace(".org", "")
      .capitalize();

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
                  {typeof row[item.id] === "boolean" ? (
                    row[item.id] === true ? (
                      "Yes"
                    ) : (
                      "No"
                    )
                  ) : row[item.id] === "" ? (
                    "-"
                  ) : item.type === "url" ? (
                    <a href={String(row[item.id])} target="_blank">
                      {extractWebsiteName(String(row[item.id]))}
                    </a>
                  ) : (
                    row[item.id]
                  )}
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
