import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Kai0 | HKU MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Kai0", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'
import Link from "next/link"
import { Slash } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
]



export default function Home() {
    return (
        <main>



                {/* Landing */}
                <div className="w-full h-48 pl-6 pr-6 flex flex-row justify-center bg-fixed">
                    <div className="w-full h-full max-w-7xl flex flex-col justify-end pb-10 gap-6">
                        <Breadcrumb>
                            <BreadcrumbList>
                                {paths.map((path) => (
                                    <BreadcrumbList key={path.path}>
                                        <BreadcrumbLink asChild>
                                            <Link href={path.url} className="text-foreground animated-underline hover:text-mred">
                                                {path.path}
                                            </Link>
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator>
                                            <Slash className="text-foreground" />
                                        </BreadcrumbSeparator>
                                    </BreadcrumbList>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>




                <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                    {/* navigator */}
                    <div className="w-48 hidden 3xl:block">
                        <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        <Link className="select-none flex items-center gap-3 group" href="#abstract">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Abstract
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#veni">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Veni
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#vidi">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Vidi
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#vici">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Vici
                                </span>
                            </Link>
                        </div>
                    </div>
                    




                {/* transferable */}
                <div className="w-full max-w-7xl flex flex-col">



                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                            <Link href="#abstract" className="scroll-mt-32 group flex items-center flex-row" id="abstract">
                                <h2>
                                    Abstact
                                </h2>
                                <div className="min-w-12 select-none">
                                    <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </div>
                            </Link>
                        </h2>
                    </div>
                    <div className="mt-6 flex flex-row gap-6 justify-center">
                        <div></div>
                        <p className="leading-relaxed max-w-4xl">
                            文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Stridesand model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                        </p>
                        <div></div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <div className="grid grid-cols-3 gap-6">
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <i>
                            explain the image
                        </i>
                    </div>
                    <div className="mt-6 flex flex-row gap-6 justify-center">
                        <div></div>
                        <p className="leading-relaxed max-w-4xl">
                            文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Stridesand model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                        </p>
                        <div></div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <div className="grid grid-cols-5 gap-6">
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <i>
                            explain the image
                        </i>
                    </div>



                </div>



                <div className="w-48 hidden 3xl:block"></div>
            </div>
        </main>
    );
}
