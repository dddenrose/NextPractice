"use client";
import useSWR from "swr";

export const useCertainTodo = (id = 1) => {
  const fetcher = (args: any) => fetch(args).then((res) => res.json());

  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    fetcher
  );

  return {
    data,
  };
};

export const useAllTodo = () => {
  const fetcher = (args: any) => fetch(args).then((res) => res.json());

  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/todos`,
    fetcher
  );

  return {
    data,
  };
};
