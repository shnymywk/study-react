import Image from "next/image";
import { Links } from "@/components/Links/index";
import { Headline } from "@/components/Headline/index";
import { useEffect } from "react";
import { useCounter } from "@/components/hooks/useCounter";
import { useInputArray } from "@/components/hooks/useInputArray";


export function Main(props) {
  useEffect(() => {
      document.body.style.backgroundColor = props.bgColor;
      return () => {
        console.log("cleanup!");
        document.body.style.backgroundColor = "";
      };
    },[]);

  const {count,isShow,handleClick,handleDisplay} = useCounter();
  const {text,array,handleChange,handleAdd} = useInputArray();


  return (
    <div
      className={` flex min-h-screen items-center justify-center font-sans `}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input  type="text" value={text} onChange={handleChange}/>
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        
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
