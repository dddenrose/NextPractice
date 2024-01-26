"use client";
import React from "react";
import { Skeleton, Table } from "antd";
import { useRouter } from "next/navigation";
import TodoDetailModal from "./components/TodoDetailModal";
import RegularButton from "@/components/RegularButton/RegularButton";
import CustomButton from "@/components/CustomButton/CustomButton";

const Todo = () => {
  const router = useRouter();
  const [tableData, setTableData] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [todoData, setTodoData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const handleDetailModalOpen = async (id: number) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    ).then((res) => res.json());

    setTodoData(result);
    setIsModalOpen(true);
  };

  const columns = [
    { title: "Index", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record: any) => (
        <>
          <a onClick={() => router.push(`/todo/${record.id}`)}>Detail</a>
          <br />
          <a onClick={() => handleDetailModalOpen(record?.id)}>DetailModal</a>
        </>
      ),
    },
  ];

  React.useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      const { data } = await fetch("/api/todo").then((res) => res.json());
      setTableData(data || []);
      setIsLoading(false);
    };

    init();
  }, []);

  return isLoading ? (
    <Skeleton active />
  ) : (
    <>
      <TodoDetailModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      
      <Table columns={columns} dataSource={tableData || []} rowKey={"id"} />
      <CustomButton />
      <RegularButton />
    </>
  );
};

export default Todo;
