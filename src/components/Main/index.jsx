import Image from "next/image";
import { Links } from "@/components/Links/index";
import { Headline } from "@/components/Headline/index";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
      document.body.style.backgroundColor = props.bgColor;
      return () => {
        console.log("cleanup!");
        document.body.style.backgroundColor = "";
      };
    },[]);

  return (
    <div
      className={` flex min-h-screen items-center justify-center font-sans `}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          style={{ height: "auto" }}
        />

        <Headline title={props.title}>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight ">To get started, edit the {props.title} file.</h1>
        </Headline>

        <Links />
      </main>
    </div>
  );
}
