"use client";

import React from "react";
import Modal, { ModalProps } from "./modal/Modal";
import Table, { TableProps } from "./table/Table";

type Props = TableProps & {
  title: string;
  modalProps?: ModalProps;
};

export default function TableTemplate({
  title,
  modalProps,
  heads,
  rows,
}: Props) {
  return (
    <section className="d-flex flex-column w-100 gap-2 p-4">
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        {modalProps && (
          <Modal
            buttonTitle={modalProps.buttonTitle}
            inputs={modalProps.inputs}
            title={modalProps.title}
            submit={modalProps.submit}
          />
        )}
      </div>
      <Table heads={heads} rows={rows} />
    </section>
  );
}
