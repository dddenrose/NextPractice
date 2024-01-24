"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Button, Modal } from "antd";
import { useRouter, useParams } from "next/navigation";

const TodoDetail = (props: any) => {
  const { isModalOpen, setIsModalOpen } = props;
  const params = useParams();
  const router = useRouter();
  const [todoData, setTodoData] = React.useState<any>({});

  React.useEffect(() => {
    const init = async () => {
      if (params.id) {
        const { data } = await fetch(`/api/todo/${params.id}`).then((res) =>
          res.json()
        );

        setTodoData(data);
      }
    };

    init();
  }, [params.id]);

  return (
    <div>
      <Button onClick={() => router.back()}>Back</Button>
      <div>Todo id: {todoData?.id}</div>
      <div>Todo title: {todoData?.title}</div>
    </div>
  );
};

export default TodoDetail;
