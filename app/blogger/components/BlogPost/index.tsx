"use client";
import React from "react";
import * as style from "./style";
import { Table } from "antd";

const BlogPost = (props: any) => {
  const { postList } = props;

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "body",
      dataIndex: "body",
      key: "body",
    },
  ];

  return <Table columns={columns} dataSource={postList} rowKey={"id"} />;
};

export default BlogPost;
