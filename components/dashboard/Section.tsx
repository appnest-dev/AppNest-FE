"use client";

import React from "react";
import Modal, { ModalProps } from "./modal/Modal";

type Props = {
  children: React.ReactNode;
  title: string;
  modalProps?: ModalProps;
};

export default function Section({ children, title, modalProps }: Props) {
  return (
    <section className="d-flex flex-column w-100 gap-2 p-4">
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        {modalProps && (
          <Modal
            inputs={modalProps.inputs}
            title={modalProps.title}
            submit={modalProps.submit}
          />
        )}
      </div>
      {children}
    </section>
  );
}
