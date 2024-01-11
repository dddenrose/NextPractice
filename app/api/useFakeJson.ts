"use client";
import useSWR from "swr";

export default function useFakeJson(id = 1) {
  const fetcher = (args: any) => fetch(args).then((res) => res.json());

  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    fetcher
  );

  return {
    data,
  };
}
