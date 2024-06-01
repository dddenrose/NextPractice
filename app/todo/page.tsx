import React from "react";
import Table from "./components/Table/Table";

const Todo = async () => {
  const { data } = await fetch("http://localhost:3000/api/todo").then((res) =>
    res.json()
  );

  return <Table data={data} />;
};

export default Todo;
