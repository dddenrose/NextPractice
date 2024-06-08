"use client";
import React from "react";
import Image from "next/image";

interface PhotoProps {
  item: any;
}

const PhotoWithClientComp = (props: PhotoProps) => {
  const { item } = props;
  const [data, setData] = React.useState(null as any);

  React.useEffect(() => {
    const init = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${item}`
      );

      const data = await res.json();
      setData(data);
    };

    init();
  }, []);

  return (
    <>
      {data ? (
        <Image src={data.url} alt={data.title} width={50} height={50} />
      ) : null}
    </>
  );
};

export default PhotoWithClientComp;
