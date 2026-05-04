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
  const [text,setText] = useState("");
  const [isShow,setIsShow] = useState(true);
  
  const handleClick = useCallback(() => {
    if (count < 10){
    setCount((count) => count + 1);
    }
  },[count]); 

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  },[])

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5){
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim());
  },[]);


  return (
    <>
    <Header />
    {isShow ? <h1>{count}</h1> : null}
    <button onClick={handleClick}>ボタン</button>
    <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
    <input  type="text" value={text} onChange={handleChange}/>
    <Main title="Index" bgColor="lightblue"/>
    </>
  );
}
