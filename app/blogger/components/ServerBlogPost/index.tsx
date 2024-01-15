import React from "react";
import { getAllPost } from "@/app/api/usePost";

async function getData() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  console.log("====fetch time data");

  return res.json();
}

const ServerBlogPost = async () => {
  // const data = await getAllPost();
  const data = await getData();
  const data_2 = await getData();

  return <div>ServerBlogPost: {new Date(data.datetime).toLocaleString()}</div>;
};

export default ServerBlogPost;
