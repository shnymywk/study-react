import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Headline(props) {

  return (
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {props.children}
        </div>
  );
}
