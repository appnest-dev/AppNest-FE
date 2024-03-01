import Link from "next/link";
import { Accordion, ListGroup } from "react-bootstrap";

type props = {
  title: string;
  list: { mainTitle: string; listItems: { title: string; href: string }[] }[];
};

export default function Section({ title, list }: props) {
  return (
    <section className="d-flex flex-column gap-1">
      <h2 className="fs-6">{title}</h2>

      <Accordion flush className="bg-transparent">
        {list.map((el, index) => (
          <Accordion.Item
            eventKey={String(index)}
            className="bg-transparent"
            key={index}
          >
            <Accordion.Header className="bg-transparent">
              {el.mainTitle}
            </Accordion.Header>

            <Accordion.Body className="p-0">
              <ListGroup variant="flush" className="m-0">
                {el.listItems?.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <ListGroup.Item className="bg-transparent border-0">
                      {item.title}
                    </ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
