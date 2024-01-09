"use client";
import React from "react";

const Title = (props: any) => {
  const { articleData } = props;
  const [powers, setPowers] = React.useState<any>(null);

  return (
    <>
      <h2>Title:</h2>
      <h2>UserId:</h2>
    </>
  );
};

export default Title;
