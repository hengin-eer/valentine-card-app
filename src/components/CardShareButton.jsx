"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const CardShareButton = ({
    choco,
    author,
    body,
}) => {
    const [shareURL, setShareURL] = useState('');
    useEffect(() => {
        const location = window.location;
        const url = `${location.protocol}//${location.host}/preview/?choco=${choco}&author=${author}&body=${body}`;
        setShareURL(url);
    }, [])

    const copyShareURL = () => {
        navigator.clipboard.writeText(shareURL);
        alert("クリップボードにURLが貼り付けられました！");
    };

    return (
        <div className="flex items-center gap-[30px]">
            <button
                className="px-4 py-3 text-white rounded-md shadow-md bg-p-400 mb-[100px]"
                onClick={() => copyShareURL()}
            >
                🎁 カードをシェアする
            </button>
            {/* 
            もうちょいデザインを凝りたい
            Twitter, Instagram（DMも良いが、ストーリー。画像変換の知識必須？？）, LINEの共有はできるようになりたい。
            自分のブログデザインみたいな共有セクションを設置
            */}
            <Link
                className="px-4 py-3 text-black rounded-md shadow-md bg-p-100 mb-[100px]"
                href={`/preview/?choco=${choco}&author=${author}&body=${body}`}
            >
                ページへGO!!
            </Link>
        </div>
    )
}
