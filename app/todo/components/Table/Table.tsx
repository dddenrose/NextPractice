"use client";
import React from "react";
import { Table as AntdTable, Button, Dropdown, MenuProps } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Table = (props: any) => {
  const { data } = props;
  const router = useRouter();

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
          <BarsOutlined />
        </Dropdown>
      ),
    },
  ];
  return (
    <AntdTable
      columns={columns}
      dataSource={data || []}
      rowKey="id"
      bordered
      size="small"
      pagination={{ pageSize: 100, showSizeChanger: false }}
    />
  );
};

export default Table;
