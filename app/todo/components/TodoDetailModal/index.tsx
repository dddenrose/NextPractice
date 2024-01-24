import React from "react";
import { Modal } from "antd";

const TodoDetailModal = (props: any) => {
  const { isModalOpen, setIsModalOpen, todoData, setTodoData } = props;

  const handleCancel = () => {
    setIsModalOpen(false);
    setTodoData({});
  };

  return (
    <Modal
      title="TodoDetailModal"
      open={isModalOpen}
      onOk={handleCancel}
      onCancel={handleCancel}
    >
      TodoDetailModal
      <div>id: {todoData?.id}</div>
      <div>title: {todoData?.title}</div>
    </Modal>
  );
};

export default TodoDetailModal;
