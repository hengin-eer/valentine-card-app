export const Description = () => {
    const descriptions = [
        {
            "id": "1",
            "emoji": "💝",
            "body": "友達や好きな人、家族にバレンタインカードを送ってみよう！",
        },
        {
            "id": "2",
            "emoji": "🎉",
            "body": "共有からリンクをコピーして思いを伝えよう！！",
        },
    ];

    return (
        <div className="pt-5 bg-white">
            {descriptions.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-5 p-4 mb-5 rounded-lg bg-p-100"
                >
                    <div className="p-[6px] rounded-lg text-2xl bg-white shadow-slate-200">{item.emoji}</div>
                    <p className="text-black">{item.body}</p>
                </div>
            ))}
        </div>
    )
}