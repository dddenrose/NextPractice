"use client";
import React from "react";
import { Button, Collapse, Modal } from "antd";

const InfoModal: React.FC = async () => {
  const showModal = () => {
    Modal.info({
      title: "Introduction",
      content: (
        <div>
          1. Server Component is responsible of fetching Data
          <br />
          2. Client Component is responsible of rendering Data
          <br />
          3. Descreasing the loading from client and browser
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <Button type="primary" onClick={showModal}>
      Info
    </Button>
  );
};

export default InfoModal;
