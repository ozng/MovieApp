import { Modal } from "antd";
import React from "react";

function DetailVideoModal({ isModalOpen, handleOk, handleCancel }) {
  return (
    <>
      <Modal
        title="Videos"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default DetailVideoModal;
