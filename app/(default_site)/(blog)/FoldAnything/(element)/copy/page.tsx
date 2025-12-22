import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MMLab at CVPR 2025",
    description: "Multimedia Laboratory",
    keywords: ["CVPR 2025", "Event", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
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

import CopyText from "@/app/(default_site)/(blog)/FoldAnything/(element)/copy/copyText"

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



                    <div className="mt-6 flex flex-row gap-6 justify-center">
                        <div></div>
                        <p className="leading-relaxed max-w-4xl bg-amber-700 rounded-sm p-4">
                            <CopyText html={`文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Stridesand model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)`} />
                        </p>
                        <div></div>
                    </div>



                </div>



                <div className="w-48 hidden 3xl:block"></div>
            </div>
        </main>
    );
}