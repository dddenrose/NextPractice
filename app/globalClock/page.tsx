import React from "react";

interface TimeReponse {
  year?: number;
  datetime?: string;
  date?: string;
  time?: string;
}

const GlobalClock = async () => {
  const getData = async () => {
    try {
      const data = await fetch(
        "https://worldtimeapi.org/api/timezone/Asia/Taipei",
        { next: { revalidate: 5 } }
      ).then((response) => response.json());

      console.log(data, "data");
      return data;
    } catch (err) {
      console.log(err, "===err");
    } finally {
      console.log("finally");
    }
  };

  const data = await getData();

  return <div>🕑 Taipei time: {data?.datetime}</div>;
};

export default GlobalClock;
