import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const Links = () => {
  // textLinksとbuttonLinksを定義してmap関数で繰り返すことでメンテナンス性の向上を図っている
  const textLinks = [
    { 
      label: "Templates", 
      href: "https://vercel.com/templates?...", 
      suffix: " or the " 
    },
    { 
      label: "Learning", 
      href: "https://nextjs.org/learn?...", 
      suffix: " center." 
    },
  ];
  const buttonLinks = [
    {
      label: "Deploy Now",
      href: "https://vercel.com/new?...",
      isPrimary: true,
      icon: "/vercel.svg",
    },
    {
      label: "Documentation",
      href: "https://nextjs.org/docs/pages/getting-started?...",
      isPrimary: false,
    },
  ];

  return (
    <>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {/* ここは共通化できない部分なのでそのまま記入 */}
        Looking for a starting point or more instructions? Head over to{" "}

        {/* ここから配列を繰り返す */}
        {/* keyにはラベル部分を採用、link.の部分に上で定義した配列を指定して配列が終わるまで繰り返し表示する */}
        {textLinks.map((link) => (
          <span key={link.label}>
            <a href={link.href} className="font-medium text-zinc-950 dark:text-zinc-50">
              {link.label}
            </a>
            {link.suffix}
          </span>
        ))}
      </p>
      {/* ここまではテキストの中のリンクの話 */}

      {/* ここから下のボタンリンクの話 */}
      {/* iconとlabelでできたボタンが配列の数だけ表示される */}
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        {buttonLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            // isPrimaryがtrueかfalseかで当てるcssを変えている
            className={
              link.isPrimary
                ? "flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                : "flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            }
          >
            {/* これはアイコンの値があればimageを表示する、なければしないというもの */}
            {link.icon && (
              <Image
                className="dark:invert"
                src={link.icon}
                alt={`${link.label} icon`}
                width={16}
                height={16}
              />
            )}
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
