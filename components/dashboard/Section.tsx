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
      {list.map((el, index) => (
        <Accordion flush key={index}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{el.mainTitle}</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {el.listItems?.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <ListGroup.Item>{item.title}</ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </section>
  );
}
