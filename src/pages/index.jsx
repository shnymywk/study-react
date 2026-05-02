import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback } from "react";

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
  const foo = 1;
  
  const handleClick = useCallback ((e) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
},[]); 

  return (
    <>
    <Header />
    <a
      href="/about"
      onClick={handleClick}>
      ボタン
    </a>
    <Main title="Index"/>
    </>
  );
}
