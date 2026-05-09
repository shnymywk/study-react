// reactの元々の機能をインポート
import { useCallback, useState } from "react";

// useInputArrayというカスタムフックを定義しexportしている
export const useInputArray =  () => {
  // textとarrayという変数をuseStateを使用して定義、初期値に空文字と空は列を設定
  // setTextとsetArrayを依存配列として更新のトリガーにしている 
  const [text,setText] = useState("");
  const [array,setArray] = useState([]);


  // handleChangeはもしvalueの長さが5を超える場合にアラートを表示し
  // それ以外の場合はsetTextを呼び出すことでtextの値を更新する関数
  // trim()は文字列の両端から空白を削除するメソッド
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5){
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim());
  },[]);

  // handleAddは、もし現在の配列に入力されたtextが含まれている場合はアラートを表示し
  // 含まれていない場合はtextを配列に追加する関数
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)){
        alert("同じ要素が既に存在します。")
        return prevArray;
      }

      // スプレット構文で既存の配列の最後にtextを追加している
      // スプレット構文は非破壊メソッドで元の配列を変更せずに新しい配列を作成することができるもの
      return [...prevArray, text];
    });
  },[text])

  // 返り血として、全ての値をオブジェクト形式で返す
  return {text,array,handleChange,handleAdd};
}