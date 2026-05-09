// reactの元々の機能をインポート
import { useCallback, useMemo, useState } from "react";

// useCounterというカスタムフックを定義しexportしている
export const useCounter= () => {
  // useStateを使用して、countとisShowという変数を定義し、それぞれ初期値を1とtrueに設定
  // useStateは状態を管理しset〇〇は依存配列で値が変更されたときに働く関数を返す
  // setCountとsetIsShowは依存配列で、countとisShowの値を更新するための関数
  const [count,setCount] = useState(1);
  const [isShow,setIsShow] = useState(true);

  // useMemoを使用してdoubleCountを定義し、countを依存配列に指定することで余計な再計算を防いでいる
  const doubleCount = useMemo (() => {
    return count * 2
  },[count]);

  // useCallbackはレンダリングされた依存配列の値が変更されたときに再生成を行う
  // handleClickはcountが10未満の時に現在のカウントに1を追加してsetCountを呼び出してcountの値を更新する関数
  const handleClick = useCallback(() => {
    if (count < 10){
    setCount((prevCount) => prevCount + 1);
    }
  },[count]); 

  // handleDisplayはisShowの値を反転させてsetIsShowを呼び出してisShowの値を更新する関数
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  },[]);

  return {count,doubleCount,isShow,handleClick,handleDisplay};
  // 返り値として、全ての値をオブジェクト形式で返す
};