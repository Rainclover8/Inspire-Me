"use client";
import { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<Quote | null>(null);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "x-api-key": "v2vWbLqTSEKhmvxModiR7A==CWaD0nJXCaktxFw8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setData(data[0]);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setLoader(false);  // Yükleme bitmeden hata gösterimi engellenmiş olur
      });
  }, []);

  return (
    <>
      <div className="bg-white h-fit w-full flex justify-center items-center max-h-screen mx-auto mt-24 rounded-3xl py-20 shadow-2xl shadow-amber-500 container">
        {loader ? (
          <div className="text-center text-black font-extrabold md:text-4xl text-xl">
            Yükleniyor...
          </div>
        ) : (
          <div>
            <h1 className="text-black text-center flex justify-center items-center h-full italic md:text-4xl text-xl px-4">
              "{data?.quote}"
            </h1>
            <h2 className="text-black/70 pl-9 italic md:text-[40px] mt-4">
              Writer: {data?.author}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
