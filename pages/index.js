import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/components/Main"
import styles from "../styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Main title="Index"/>
    </>
  );
}
