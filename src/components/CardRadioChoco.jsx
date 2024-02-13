import { cardChocoTypeState } from "@/states/cardContentsState";
import { useRecoilState } from "recoil"

export const CardRadioChoco = () => {
    const [cardChocoType, setCardChocoType] = useRecoilState(cardChocoTypeState);
    const options = [
        {
            "id": "choco1",
            "value": "🥰本命チョコ（勇気出して！）",
        },
        {
            "id": "choco2",
            "value": "🎈義理チョコ（「義理」です。）",
        },
        {
            "id": "choco3",
            "value": "✨友チョコ（おやつとして）",
        },
        {
            "id": "choco4",
            "value": "👩‍👧‍👦ファミチョコ（家族へ）",
        },
    ]

    const updateChocoType = (e) => {
        setCardChocoType(e.target.id);
    };

    return (
        <div>
            <h2 className="pt-5 text-2xl leading-[1.6] font-bold text-p-300">🍫 贈るチョコを選ぼう</h2>
            <form
                className="py-5"
            >
                {options.map((item) => (
                    <div
                        className="flex items-center mb-4"
                    >
                        <input
                            className="w-5 h-5 mr-3 focus:ring-red-500 focus:ring-2"
                            type="radio" id={item.id} value={item.value} name="kinda-choco"
                            onChange={(e) => updateChocoType(e)}
                        />
                        <label
                            className="text-lg"
                            htmlFor={item.id}
                        >
                            {item.value}
                        </label>
                    </div>
                ))}
            </form>
            {/* chocoTypeの値ごとに表示するチョコレート画像を変更する */}
            <div className="py-4">
                <div className="h-[60px] aspect-square rounded-full bg-p-300"></div>
            </div>
        </div>
    )
}
