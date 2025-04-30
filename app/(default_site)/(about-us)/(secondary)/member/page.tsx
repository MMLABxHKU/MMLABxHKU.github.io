import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Member | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Member", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
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



import { FadeIn } from "@/components/animation/fade-in"



import { pis, members } from "@/data/member"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "About Us",
        url: "/about-us"
    },
    {
        path: "Member",
        url: "/about-us#member"
    },
]



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-72 pl-6 pr-6 flex flex-row justify-center bg-gradient-to-br from-[#f9a61a] via-[#ee2e69] to-[#4ec6df] bg-fixed">
                <div className="w-full h-full max-w-7xl flex flex-col justify-end pb-10 gap-6">
                    <FadeIn>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {paths.map((path) => (
                                    <BreadcrumbList key={path.path}>
                                        <BreadcrumbLink asChild>
                                            <Link href={path.url} className="text-white animated-underline hover:text-white">
                                                {path.path}
                                            </Link>
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator>
                                            <Slash className="text-white" />
                                        </BreadcrumbSeparator>
                                    </BreadcrumbList>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </FadeIn>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                        <FadeIn>
                            All Members
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 2xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        {pis.map((pi) => (
                            <Link className="select-none flex items-center gap-3 group hover:text-mred" href={"#" + pi.id} key={pi.name}>
                                <FadeIn>
                                    <span className="border-l-4 border-l-foreground text-sm">
                                        &nbsp;
                                    </span>
                                </FadeIn>
                                <FadeIn>
                                    <span className="text-xl font-bold">
                                        {pi.name}
                                    </span>
                                </FadeIn>
                            </Link>
                        ))}
                    </div>
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">
                    {pis.map((pi) => (
                        <div key={pi.name}>
                            <FadeIn>



                                <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                                    <div className="flex-1/3 md:max-w-64">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={pi.img}
                                                alt={pi.name}
                                                fill
                                                className="h-full w-full rounded-md object-cover loading"
                                            />
                                        </AspectRatio>
                                    </div>
                                    <div className="flex-2/3 flex flex-col gap-6">
                                        <a className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold scroll-mt-32 hover:text-mred" href={"#" + pi.id} id={pi.id}>
                                            {pi.name}
                                        </a>
                                        <p>
                                            {pi.bio}
                                        </p>
                                        <div className="flex gap-6">
                                            {pi.links.map((link) => (
                                                <Link href={link.link} target="_blank" key={link.icon}  className="h-8 w-8 group">
                                                    <AspectRatio ratio={1/1}>
                                                        <Image
                                                            src={"/icon/" + link.icon + ".svg"}
                                                            alt={link.link}
                                                            fill
                                                            className="group-hover:scale-125 transition duration-200"
                                                        />
                                                    </AspectRatio>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                                    {[...members.values()].filter(member => member.pi.includes(pi.name)).map((member) => (
                                        <div className="flex flex-col gap-3" key={member.name}>
                                            <AspectRatio ratio={1/1}>
                                                <Image
                                                    src={member.img}
                                                    alt={member.name}
                                                    fill
                                                    className="h-full w-full rounded-md object-cover loading"
                                                />
                                            </AspectRatio>
                                            <span className="font-bold text-xl">{member.name}</span>
                                            <span>{member.title}</span>
                                            <div className="flex gap-6">
                                                {member.links.map((link) => (
                                                    <Link href={link.link} target="_blank" key={link.icon}  className="h-8 w-8 group">
                                                        <AspectRatio ratio={1/1}>
                                                            <Image
                                                                src={"/icon/" + link.icon + ".svg"}
                                                                alt={link.link}
                                                                fill
                                                                className="group-hover:scale-125 transition duration-200"
                                                            />
                                                        </AspectRatio>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>



                            </FadeIn>
                            <div className="w-full flex flex-col items-center">
                                <Separator className="max-w-7xl mt-20"/>
                            </div>
                        </div>
                    ))}
                </div>



                <div className="w-48 hidden 2xl:block"></div>



            </div>



        </main>
    );
}
