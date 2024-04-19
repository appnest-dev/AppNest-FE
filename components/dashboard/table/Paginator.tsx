import { ChangeEvent, useRef, useState } from "react";
import { FormSelect, Pagination } from "react-bootstrap";
import "./table.css";

export default function Paginator() {
  const currentPageRef = useRef<HTMLLIElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const fullPagesCount = useRef<HTMLLIElement>(null);
  const [fullPages, setFullPages] = useState(5);

  const prevPage = () => {
    currentPage !== 1 && setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    currentPage < 5 && setCurrentPage((prev) => prev + 1);
  };
  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    if (fullPages) {
      setCurrentPage(fullPages);
    }
  };

  const changeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target?.value);
  };

  return (
    <div className="d-flex">
      <Pagination className="d-flex w-100 flex-fill justify-content-center">
        <Pagination.First onClick={firstPage} />
        <Pagination.Prev onClick={prevPage} />
        <div className="d-flex align-items-center px-2 rounded-2">
          <Pagination.Item ref={currentPageRef} className="text-black">
            {currentPage}
          </Pagination.Item>
          <Pagination.Item disabled ref={fullPagesCount}>
            {fullPages}
          </Pagination.Item>
        </div>
        <Pagination.Next onClick={nextPage} />
        <Pagination.Last onClick={lastPage} />
      </Pagination>
      <FormSelect onChange={changeQuantity} className="w-auto">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </FormSelect>
    </div>
  );
}
