// next.jsとreactの機能をインポート
// HeadlineコンポーネントとLinksコンポーネントをインポート

import Image from "next/image";
import { Links } from "@/components/Links/index";
import { Headline } from "@/components/Headline/index";
import { useEffect } from "react";


// mainコンポーネントを定義しexportしている
export const Main = (props) => {
  // useEffectはコンポーネントのマウント時に背景色を変更し
  // アンマウント時に背景色を元に戻す処理を行いつつログを出力する
  // 今回は直接domを操作しているが基本的にはNG
  useEffect(() => {
      document.body.style.backgroundColor = props.bgColor;
      return () => {
        console.log("cleanup!");
        document.body.style.backgroundColor = "";
      };
    },[]);

  // 返り値として下記内容を返す
  // classNameはcssのクラス設定でglobals.cssの内容を適用している
  // props.titleは親コンポーネントでtitle属性に定義された値が入る
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

        {/* Headlineコンポーネントの表示 */}
        {/* タイトルは親要素で渡される */}
        <Headline title={props.title}>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight ">To get started, edit the {props.title} file.</h1>
        </Headline>
        
        {/* Linksコンポーネントの表示 */}
        <Links />
      </main>
    </div>
  );
}
