// 別ファイルからのデータをinputしている
import "@/styles/globals.css";
import { useCounter } from "@/components/hooks/useCounter";
import { useInputArray } from "@/components/hooks/useInputArray";

// 全てのページで共通して使用されるコンポーネントを定義するファイル
// componentは各ページで定義されるhomeやaboutなどを指す
// pagePropsは元からreactやnext.js定義されているpropsを指す

// MyAppはcomponentとpagePropsを引数にもつ関数で定義されている
const MyApp = ({ Component, pageProps }) => {
  
  // useCounterとuseInputArrayの内容をcounterとinputArrayに代入している
  // これはcustom hookでhooksで定義されているものをまとめている
  const counter = useCounter();
  const inputArray = useInputArray();
  

  return (
    //ぞれぞれのcomponentにpagePropsとcounterとinputArrayの内容を渡している
  <>
      <Component {...pageProps}{...counter}{...inputArray} />
  </>
  );
}

// 上で定義していないのはdefaultでは関数を用いることができないから
// 別途exportを行う必要があるため
export default MyApp;