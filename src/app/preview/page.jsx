"use client";

import { PreviewCardBody } from "@/components/PreviewCardBody";

export default function page(searchParams) {
    const cardContents = {
        "author": searchParams.searchParams.author,
        "body": searchParams.searchParams.body,
    };

    console.log(cardContents)

    return (
        <div className="mt-8">
            <PreviewCardBody cardContents={cardContents && cardContents} />
        </div>
    )
}
