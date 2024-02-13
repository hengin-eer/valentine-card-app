export const PreviewCardBody = ({ cardContents }) => {
    return (
        <div className="py-5 w-[80vw] max-w-[500px] relative">
            <img
                className="absolute h-[50px] aspect-square top-0 left-[50%] translate-x-[-50%]"
                src="/ribbon.png"
            />
            <div className="underline decoration-1 decoration-dashed decoration-slate-400 underline-offset-8  h-full px-8 pt-10 pb-6 border-2 rounded-md border-slate-300 leading-[2.4] w-full whitespace-pre-wrap">
                <p className="mb-4 text-right">
                    {cardContents.author}より
                </p>
                <p>
                    {cardContents.body}
                </p>
            </div>
        </div>
    )
}
