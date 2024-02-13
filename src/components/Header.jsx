import Link from "next/link"
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export const Header = () => {
    const MY_X_LINK = "https://x.com/tim_daik"
    const MY_GITHUB_LINK = "https://github.com/hengin-eer"

    return (
        <header className="w-full h-[80px] px-8 flex items-center justify-between text-white bg-p-200">
            <h1 className="text-xl underline decoration-white decoration-1 underline-offset-4">
                <Link href="/">Happy Valentine's Card</Link>
            </h1>
            <ul className="flex items-center gap-5 text-2xl">
                <Link href={MY_X_LINK}>
                    <li><FaXTwitter /></li>
                </Link>
                
                <Link href={MY_GITHUB_LINK}>
                    <li><FaGithub /></li>
                </Link>
            </ul>
        </header>
    )
}