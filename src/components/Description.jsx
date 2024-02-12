export const Description = () => {
    const descriptions = [
        {
            "emoji": "💝",
            "body": "友達や好きな人、家族にバレンタインカードを送ってみよう！",
        },
        {
            "emoji": "🎉",
            "body": "共有からリンクをコピーして思いを伝えよう！！",
        },
    ];

    return (
        <div className="pt-5 bg-white">
            {descriptions.map((item) => (
                <div className="flex items-center gap-5 p-4 mb-5 rounded-lg bg-p-100">
                    <div className="p-[6px] rounded-lg text-2xl bg-white shadow-slate-200">{item.emoji}</div>
                    <p className="text-black">{item.body}</p>
                </div>
            ))}
        </div>
    )
}