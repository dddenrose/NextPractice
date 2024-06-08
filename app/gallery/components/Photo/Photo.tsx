import React from "react";
import Image from "next/image";

interface PhotoProps {
  item: any;
}

const Photo = async (props: PhotoProps) => {
  const { item } = props;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${item}`
  );

  const data = await res.json();

  return (
    <>
      {data ? (
        <Image src={data.url} alt={data.title} width={50} height={50} />
      ) : null}
    </>
  );
};

export default Photo;
