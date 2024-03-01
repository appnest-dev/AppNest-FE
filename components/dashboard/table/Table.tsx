import TableComp from "react-bootstrap/Table";

type Props = {
  heads: string[];
  rows: string[][];
};

export default function Table({ heads, rows }: Props) {
  return (
    <>
      <TableComp striped>
        <thead>
          <tr>
            <th>#</th>
            {heads.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {row.map((item, ind) => (
                <td key={ind}>{item === "" ? "-" : item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableComp>
    </>
  );
}
