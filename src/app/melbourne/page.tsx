"use client";
import { useEffect, useState } from "react";

type DataResponse = {
  data: string | null;
};

export default function HomePage() {
  const [data, setData] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/long-polling");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const json: DataResponse = await res.json();
        setData(json.data);
        void fetchData(); // Immediately send another request
      } catch (error) {
        console.error("Polling error:", error);
        setTimeout(() => void fetchData(), 5000); // Retry after 5 seconds if there's an error
      }
    };

    void fetchData();
  }, []);

  const sendData = async () => {
    try {
      await fetch("/api/long-polling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputValue }),
      });
    } catch (error) {
      console.error("Sending data error:", error);
    }
  };

  return (
    <div>
      <h1>Long Polling Example</h1>
      <p>Data from server: {data}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => void sendData()}>Send Data</button>
    </div>
  );
}
