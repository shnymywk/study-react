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

// const handleClick = (e)  => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const [foo,setFoo] = useState(1)
  // let foo = 1;
  
  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
    // foo = foo + 1;
    // console.log(foo);
}; 

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return (() => {
      document.body.style.backgroundColor = "";
    });
  },[]);

  console.log(foo);

  return (
    <>
    <Header />
    <h1>{foo}</h1>
    <button onClick={handleClick}>ボタン</button>
    <Main title="Index" bgColor="lightblue"/>
    </>
  );
}
