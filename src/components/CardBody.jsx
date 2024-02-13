"use client";

import { cardAuthorState, cardBodyState } from "@/states/cardContentsState";
import { useRecoilState } from "recoil";

export const CardBody = ({}) => {
    const [cardAuthor, setCardAuthor] = useRecoilState(cardAuthorState);
    const [cardBody, setCardBody] = useRecoilState(cardBodyState);
    const updateContents = (e) => {
        setCardBody(e.target.value);
    }

    return (
        <form
            className="py-5 w-[80vw] max-w-[500px] relative"
        >
            <img
                className="absolute h-[50px] aspect-square top-0 left-[50%] translate-x-[-50%]"
                src="/ribbon.png"
            />
            <textarea
                className="underline decoration-1 decoration-dashed decoration-slate-400 underline-offset-8  leading-[2.2] w-full h-full px-8 pt-10 pb-6 border-2 rounded-md resize-none border-slate-300"
                rows={6} value={cardBody} placeholder="想いを伝えよう！！"
                onChange={(e) => updateContents(e)}
            >
            </textarea>
        </form>
    )
}