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
      const temp: TimeReponse = await new Promise(async (resolve) => {
        const data = await fetch(
          "https://worldtimeapi.org/api/timezone/Asia/Taipei",
          { cache: "no-cache" }
        ).then((response) => response.json());

        setTimeout(() => {
          resolve(data);
        }, 2000);
      });

      return temp;
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
