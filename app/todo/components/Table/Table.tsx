"use client";
import React from "react";
import {
  Skeleton,
  Table as AntdTable,
  Button,
  Dropdown,
  MenuProps,
} from "antd";
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

  const formatItems = (record: any) => {
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <Button
            type="text"
            onClick={() => {
              router.push(`/todo/${record.id}`);
            }}
          >
            Detail
          </Button>
        ),
      },
    ];

    return items;
  };

  const columns = [
    { title: "Index", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    {
      title: "Action",
      dataIndex: "",
      key: "Action",
      render: (record: any) => (
        <Dropdown menu={{ items: formatItems(record) }}>
          <a onClick={(e) => e.preventDefault()}>Hover me</a>
        </Dropdown>
      ),
    },
  ];
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
        pagination={{ pageSize: 100, showSizeChanger: false }}
      />
    </>
  );
};

export default Table;
