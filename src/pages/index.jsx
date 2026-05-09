// componentのMainとHeaderをimport
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";


// homeのコンポーネントを定義しpropsを引数に取っている
// propsは_app.jsから渡されるpagePropsと
// useCounterとuseInputArrayの内容が含まれる
const Home = (props) => {
  
  return (
    //headerとMainのコンポーネントを表示させている
    <>
    <Header />
    {/* propには_app.jsから渡されるpagePropsとuseCounterとuseInputArrayの内容が含まれる */}
    {/* isShowがtrueならcountを実行してfalseならnullを返す */}
    {/* ボタンを押すとhandleClickが実行される */}
    {/* ボタンを押すと表示非表示が切り替わりhandleDisplayが実行される */}

    {props.isShow ? <h1>{props.count}</h1> : null}
    <button onClick={props.handleClick}>ボタン</button>
    <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>


    {/* inputにはテキストが入力できて変更がhandleChangeで処理される */}
    {/* 追加ボタンを押すとhandleAddが実行される */}
    {/* リストにはpropsで得た配列の要素を繰り返し表示している */}
    <input  type="text" value={props.text} onChange={props.handleChange}/>
    <button onClick={props.handleAdd}>追加</button>
    <ul>
      {props.array.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>

    {/* Mainコンポーネントを表示させてpropsとしてtitleとbgColorを指定している */}
    <Main title="Index" bgColor="lightblue"/>
    </>
  );
}

// _app.jsにexportを行う
// 上で定義していないのはdefaultでは関数を用いることができないから
// 別途exportを行う必要があるため
export default Home;