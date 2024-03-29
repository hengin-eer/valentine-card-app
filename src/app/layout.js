import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "バレンタインカードアプリ",
  description: "友達や好きな人、家族にバレンタインカードを送ってみよう！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div>
          <main className="flex flex-col items-center min-h-screen px-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
