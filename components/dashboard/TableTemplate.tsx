"use client";

import React from "react";
import Modal, { ModalProps } from "./modal/Modal";
import Table, { TableProps } from "./table/Table";

type Props = {
  title: string;
  tableProps: TableProps;
  modalProps?: ModalProps;
};

export default function TableTemplate({
  title,
  modalProps,
  tableProps,
}: Props) {
  return (
    <section className="d-flex flex-column w-100 gap-2 p-4">
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        {modalProps && <Modal {...modalProps} />}
      </div>
      <Table {...tableProps} />
    </section>
  );
}
