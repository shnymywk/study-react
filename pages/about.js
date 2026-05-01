import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/components/Main"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Main title="About"/>
    </>
  );
}
