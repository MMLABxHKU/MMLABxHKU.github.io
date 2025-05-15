import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 | MMLab",
    description: "404 Not Found",
    keywords: ["404", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



// import Link from 'next/link'



import { FadeIn } from "@/components/animation/fade-in"




export default function NotFound() {
    return (
        <main>
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div className="w-full max-w-7xl flex flex-col gap-6 select-none">
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            404
                        </h1>
                    </FadeIn>
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            Not Found
                        </h1>
                    </FadeIn>
                    {/* <Link href="/" className='font-bold text-white animated-underline'>
                        return home
                    </Link> */}
                </div>
            </div>
        </main>
    )
}
