import Link from "next/link";
import { Accordion, ListGroup, Stack } from "react-bootstrap";

type props = {
  title: string;
  list: { mainTitle: string; listItems: { title: string; href: string }[] }[];
};

export default function Section({ title, list }: props) {
  return (
    <section className="d-flex flex-column gap-1">
      <h2 className="fs-6">{title}</h2>
      {list.map((el, index) => (
        <Accordion key={index}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{el.mainTitle}</Accordion.Header>
            <Accordion.Body>
              <Stack gap={2}>
                {el.listItems?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="d-block bg-gray p-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </section>
  );
}
