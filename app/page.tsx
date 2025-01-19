"use client";
import { useEffect, useState } from "react";


interface Quote{
  content:string,
  author:string
}

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<Quote | null>(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
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
              "{data?.content}"
            </h1>
            <h2 className="text-black/70 pl-9  italic md:text-[40px] mt-4">
              Writer : {data?.author}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
