import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count,setCount] = useState(1)
  
  const handleClick = useCallback(() => {
    if (count < 10){
    setCount((count) => count + 1);
    }
  },[count]); 

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return (() => {
      document.body.style.backgroundColor = "";
    });
  },[]);

  return (
    <>
    <Header />
    <h1>{count}</h1>
    <button onClick={handleClick}>ボタン</button>
    <Main title="Index" bgColor="lightblue"/>
    </>
  );
}
