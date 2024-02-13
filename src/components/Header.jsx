import Link from "next/link"

export const Header = () => {
    const MY_X_LINK = "https://x.com/tim_daik"
    const MY_GITHUB_LINK = "https://github.com/hengin-eer"

    return (
        <header className="w-full h-[80px] px-8 flex items-center justify-between text-white bg-p-200">
            <h1 className="text-xl">Happy Valentine's Card</h1>
            <ul className="flex items-center gap-5">
                <Link href={MY_X_LINK}>
                    <li>🐦My X</li>
                </Link>
                
                <Link href={MY_GITHUB_LINK}>
                    <li>🐙My GitHub</li>
                </Link>
            </ul>
        </header>
    )
}