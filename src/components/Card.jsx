import { useRecoilValue } from "recoil";
import { CardBody } from "./CardBody";
import { CardRadioChoco } from "./CardRadioChoco";
import { CardShareButton } from "./CardShareButton";
import { cardAuthorState, cardBodyState, cardChocoTypeState } from "@/states/cardContentsState";

export const Card = () => {
    const chocoType = useRecoilValue(cardChocoTypeState);
    const author = useRecoilValue(cardAuthorState);
    const body = useRecoilValue(cardBodyState);

    return (
        <div>
            <CardRadioChoco />
            <CardBody />
            <CardShareButton choco={chocoType} author={author} body={body} />
        </div>
    )
}