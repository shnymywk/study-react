import Link from "next/link";
import classes from "@/components/Header/Header.module.css";


// 変わらないものとしてlabelとhrefをオブジェクトとして定義（おそらくmap関数で使用するため）
const NAV_ITEMS = [
    { label: "Index", href: "/" },
    { label: "About", href: "/about" },
]

export const Header = () => {
    // NAV_ITEMSをmap関数で回して、Linkコンポーネントを生成
    // LinkコンポーネントはNext.jsの機能でaタグの代わりだと思っておけばいいはず
    // 予め遷移先のデータを読み込んでくれるからページ遷移がスムーズになってユーザーの体験が向上する
    return (
        //header.module.cssからheaderクラスのcssを適用
        <header className={classes.header}>
            {/* linkの中身はIndexだったらindexページをaboutならaboutページを表示するように作っている */}
            {/* 呼び出しはNAV_ITEMSから */}
            {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className={classes.anchor}>
                    {item.label}
                </Link>
            ))}
        </header>
    )
}