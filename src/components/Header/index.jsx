import Link from "next/link";
import classes from "@/components/Header/Header.module.css";

const NAV_ITEMS = [
    { label: "Index", href: "/" },
    { label: "About", href: "/about" },
]

export const Header = () => {
    return (
        <header className={classes.header}>
            {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className={classes.anchor}>
                    {item.label}
                </Link>
            ))}
        </header>
    )
}