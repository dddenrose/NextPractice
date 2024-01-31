import React from "react";
import { SubmitButton } from "./components/SubmitButton/SubmitButton";

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

  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      Country: formData.get("Country"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    // mutate data
    // revalidate cache

    console.log(rawFormData, "========rawFormData");
  }

  return (
    <div>
      <div>🕑 Taipei time: {data?.datetime}</div>
      <form action={createInvoice}>
        <label htmlFor="Country">Country:</label>
        <input type="text" id="Country" name="Country" />
        <label htmlFor="amount">amount:</label>
        <input type="text" id="amount" name="amount" />
        <label htmlFor="status">status:</label>
        <input type="text" id="status" name="status" />
        <SubmitButton />
      </form>
    </div>
  );
};

export default GlobalClock;
