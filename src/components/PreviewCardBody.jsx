export const PreviewCardBody = ({ cardContents }) => {
    return (
        <div>
            <div>
                <p className="text-p-200 mb-[-4px] text-base">Chocolate</p>
                <h2 className="font-bold mb-2 text-3xl text-p-400">For you</h2>
            </div>
            <img src={`/${cardContents.choco}.png`} className="h-[120px]" alt="" />
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
                    {/* From toの両方が欲しい。あと、右や左寄せしたときに余るスペースの活用法求む！
                    例えば日付（不要？）、From to並べる、 */}
                    {/* アニメーションも欲しい（ボックスを開封、チョコが出てくる、チョコは上に移動しカードもフェードイン） */}
                    {/* もっとアイコン使おうぜ！From toの先頭や、追加要素があるなら。。 */}
                </div>
            </div>
        </div>
    )
}
