"use client";
import React from "react";
import { Skeleton, Table as AntdTable } from "antd";
import { useRouter } from "next/navigation";
// import TodoDetailModal from "../components/TodoDetailModal";

const Table = (props: any) => {
  const { data } = props;
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
    // {
    //   title: "Action",
    //   dataIndex: "",
    //   key: "x",
    //   render: (record: any) => (
    //     <>
    //       <a onClick={() => router.push(`/todo/${record.id}`)}>Detail</a>
    //       <br />
    //       <a onClick={() => handleDetailModalOpen(record?.id)}>DetailModal</a>
    //     </>
    //   ),
    // },
  ];

  //   const { data } = await fetch("http://localhost:3000/api/todo").then((res) =>
  //     res.json()
  //   );

  return (
    <>
      {/* <TodoDetailModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        todoData={todoData}
        setTodoData={setTodoData}
      /> */}

      <AntdTable
        columns={columns}
        dataSource={data || []}
        rowKey="id"
        bordered
        size="small"
        pagination={{ pageSize: 100, showSizeChanger: false}}
      />
    </>
  );
};

export default Table;
