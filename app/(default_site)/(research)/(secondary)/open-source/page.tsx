import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Open Source | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Open Source", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"



import { FadeIn } from "@/components/animation/fade-in"



import { open_source_categories, open_sources } from "@/data/open-source"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Resaerch",
        url: "/research"
    },
    {
        path: "Open Source",
        url: "/research#open-source"
    },
]



export default function Home() {
    return (
        <main className="h-full">



            {/* Landing */}
            <div className="w-full h-72 pl-6 pr-6 flex flex-row justify-center bg-gradient-to-br from-morange via-mred to-mblue bg-fixed">
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
                            Projects & Datasets
                        </FadeIn>
                    </h1>
                </div>
            </div>
 
 
            
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full max-w-7xl mt-20">
                    <Tabs defaultValue={open_source_categories[0].category}>



                        <FadeIn>
                            <TabsList className="grid w-full grid-cols-3">
                                {open_source_categories.map((category) => (
                                    <TabsTrigger value={category.category} key={category.category}>{category.category}</TabsTrigger>
                                ))}
                            </TabsList>
                        </FadeIn>



                        {open_source_categories.map((category) => (
                            <TabsContent value={category.category} key={category.category}>

                                {category.years.map((year) => (
                                    <div className="mt-20" key={year}>

                                        <FadeIn>
                                            <h2 className="w-full max-w-7xl mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                                                {year}                    
                                            </h2>
                                        </FadeIn>

                                        <div className="grid w-full grid-cols-1 gap-6">
                                            {[...open_sources.values()]
                                                .filter(open_source => open_source.keys.includes(category.category))
                                                .filter(open_source => open_source.keys.includes(year))
                                                .map((open_source) => 
                                            (
                                                <FadeIn key={open_source.title}>
                                                    <div>
                                                        <Card className="border-border flex flex-row pl-6 pr-6">
                                                            <div className="flex justify-center items-center">
                                                                <Image
                                                                    src={open_source.img}
                                                                    alt="stars"
                                                                    width={512}
                                                                    height={512}
                                                                    className="flex-1/3"
                                                                />
                                                            </div>
                                                            <div className="flex-2/3 flex flex-col gap-3 justify-between">
                                                                <CardHeader>
                                                                    <CardTitle className="text-xl">{open_source.title}</CardTitle>
                                                                    <CardDescription>{open_source.description}</CardDescription>
                                                                </CardHeader>
                                                                <div className="flex flex-col gap-3">
                                                                    <CardContent className="flex flex-row gap-3 flex-wrap items-center">
                                                                        {
                                                                            open_source.githubstars != '' ? 
                                                                            <Image
                                                                                src={open_source.githubstars}
                                                                                alt="stars"
                                                                                width={96}
                                                                                height={96}
                                                                            />
                                                                            : <div></div>
                                                                        }
                                                                        <p className="bg-mred text-background px-3 rounded-xl py-1 text-xs">{open_source.tags[0]}</p>
                                                                    </CardContent>
                                                                    <div className="flex justify-between">
                                                                        <CardFooter className="flex flex-row gap-3 flex-wrap">
                                                                            {open_source.links.map((link) => (
                                                                                <Link href={link.url} target="_blank" className="animated-underline text-mred" key={link.website}>{link.website}</Link>
                                                                            ))} 
                                                                        </CardFooter>
                                                                        <CardFooter className="flex flex-row gap-1 flex-wrap text-mgray text-sm">
                                                                            <span>[</span>
                                                                            {open_source.pis.map((pi) => (
                                                                                <Link href={"/member/#" + pi.toLowerCase().replace(/ /g, '_')} target="_blank" className="animated-underline" key={pi}>{pi}</Link>
                                                                            ))} 
                                                                            <span>]</span>
                                                                        </CardFooter>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </FadeIn>
                                            ))}   
                                        </div>

                                        <div className="w-full flex flex-col items-center">
                                            <Separator className="max-w-7xl mt-20"/>
                                        </div>

                                    </div>
                                ))}

                            </TabsContent>
                        ))}



                    </Tabs>
                </div>
            </div>



        </main>
    );
}
