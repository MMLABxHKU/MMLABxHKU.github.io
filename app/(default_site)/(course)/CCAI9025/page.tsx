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



import { pis, members } from "@/data/course/lecturer_CCAI9025"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Course",
        url: "/about-us"
    },
]



export default function Home() {
    return (
        <main>
            {/* Landing */}
            <div className="w-full h-72 pl-6 pr-6 flex flex-row justify-center bg-gradient-landing bg-fixed">
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
                    <h1 className="font-bold text-t1 text-white">
                        <FadeIn>
                            CCAI9025: AI-driven Robotics for Humankind
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 3xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        <Link className="select-none flex items-center gap-3 group" href="#course" key="course">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Course Overview
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#faculty" key="faculty">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Lecturer
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#student" key="student">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Schedule
                                </span>
                            </FadeIn>
                        </Link>
                        {/* <Link className="select-none flex items-center gap-3 group" href="#alumni" key="alumni">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Alumni
                                </span>
                            </FadeIn>
                        </Link> */}
                    </div>
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">

                    
                    {/* course Overview */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#course" className="scroll-mt-32 group flex items-center" id="course">
                                Course Overview
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full max-w-7xl mt-20 text-base font-normal"> 
                            <FadeIn>
                                <Link href="#course" className="scroll-mt-32 group" id="course">
                                    <p className="leading-relaxed">
                                        Robots have become a pervasive part of our lives, evolving from obscure novelties to indispensable components of modern life. Since the dawn of the Industrial Revolution, robots have become an increasingly integral part of our society and daily lives. With each stride in robot technology, tasks that were once solely within the domain of human capability are now effortlessly executed by robotic counterparts, heralding a new era of efficiency and innovation.
                                        <br /><br />
                                        In an era marked by the swift evolution of AI, the field of robotics is experiencing unprecedented growth and innovation. Throughout this course, we will delve into a series of fundamentals at the heart of this technological revolution and try to answer the following questions: What led us to the current state of robotics? How do robots play an essential role across diverse sectors? Why do robots possess the remarkable capabilities that enable them to undertake tasks that were once deemed impossible? How does AI benefit robots in the era of big data? How do robots contribute to the Hong Kong community and society at large? Do robots only benefit humanity, or do there exist costs and concerns that necessitate careful consideration? What groundbreaking horizons lie ahead as we stride towards the future alongside robots?
                                        <br /><br />
                                        This course is fundamentally transdisciplinary and is designed for students who are new to robotics and AI. We will cultivate a foundational understanding of AI-driven robotics. The course will focus on the role of robotics in our society, considering its practical and potential uses, and how it can dramatically revolutionize our society in the future. This course does not assume previous knowledge.
                                    </p>
                                </Link>
                            </FadeIn>
                        </div>
                    </div>

                    <FadeIn>
                        <Link href="#course" className="scroll-mt-32 group" id="course">
                            <div className="w-full max-w-7xl mt-20">
                                <AspectRatio ratio={16/9}> {/* 根据你的图片比例调整这个值 */}
                                <Image
                                    src="https://mmlabassets.github.io/open-source/ai_and_humankind.png"
                                    alt="Full width image"
                                    fill
                                    className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                />
                                </AspectRatio>
                            </div>
                        </Link>
                    </FadeIn>



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>

                    {/* Faculty */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#faculty" className="scroll-mt-32 group flex items-center" id="faculty">
                                Lecturer
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    {/* to keep the same in /about-us / img */}
                    {pis.map((pi) => (
                        <FadeIn key={pi.name}>
                            <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                                <div className="flex-1/3 md:max-w-64">
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={pi.img}
                                            alt={pi.name}
                                            fill
                                            className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                        />
                                    </AspectRatio>
                                </div>
                                <div className="flex-2/3 flex flex-col gap-6 scroll-mt-32" id={pi.id}>
                                    <h3 className="text-3xl sm:text-4xl text-t1 font-bold">
                                        {pi.name}
                                    </h3>
                                    <span>
                                        {pi.title}
                                    </span>
                                    <p className="member_bio" dangerouslySetInnerHTML={{ __html: pi.bio }}></p>
                                    <div className="flex gap-6 flex-wrap">
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
                        </FadeIn>
                    ))}



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* Student */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#student" className="scroll-mt-32 group flex items-center" id="student">
                                Schedule
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full max-w-7xl mt-20">
                            <FadeIn>
                            <div className="scroll-mt-32" id="schedule">
                                {/* 表格部分 */}
                                <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-2xl font-semibold mb-4">Time</th>
                                        <th className="text-2xl font-semibold mb-4">Subject</th>
                                        <th className="text-2xl font-semibold mb-4">Materials</th>
                                        <th className="text-2xl font-semibold mb-4">Activities</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 1</th>
                                        <th className="py-3 px-4 font-medium">Introduction to Robotics</th>
                                        <th className="py-3 px-4 text-left font-medium">-</th>
                                        <th className="py-3 px-4 text-left font-medium">Guest Lecture: <span className="font-bold">Startups: Taking the First Step</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 2</th>
                                        <th className="py-3 px-4 font-medium">The History of AI</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.perlego.com/book/3631630/a-brief-history-of-intelligence-evolution-ai-and-the-five-breakthroughs-that-made-our-brains-pdf" className="text-blue-600 hover:text-blue-800 hover:underline">A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Hands-on Study of AI Technologies</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 3</th>
                                        <th className="py-3 px-4 font-medium">AI-driven Robotics for Humankind: An Overview</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=QWWgr2rN45o" className="text-blue-600 hover:text-blue-800 hover:underline">Responsible AI development.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Basic Concepts Behind Robotics</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 4</th>
                                        <th className="py-3 px-4 font-medium">Robotic Applications: Autonomous Driving and Transportation</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ODSJsviD_SU" className="text-blue-600 hover:text-blue-800 hover:underline">Tesla AI Day 2022.</a> <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLCBtJRMPXXZ4dmgCQ_X3DGTFNKjXdXFU " className="text-blue-600 hover:text-blue-800 hover:underline">MIT Embodied Intelligence Seminars.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Building a Foundation Team</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 5</th>
                                        <th className="py-3 px-4 font-medium">Robotic Applications: Manufacturing</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=U9mJuUkhUzk" className="text-blue-600 hover:text-blue-800 hover:underline">OpenAI DevDay: Opening Keynote.</a> <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLCBtJRMPXXZ4dmgCQ_X3DGTFNKjXdXFU" className="text-blue-600 hover:text-blue-800 hover:underline">MIT Embodied Intelligence Seminars.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Hands-on Projects in Robotics / Preparation for Group Project</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 6</th>
                                        <th className="py-3 px-4 font-medium">Robotic Applications: Drones and Low-altitude Economy</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=outcGtbnMuQ" className="text-blue-600 hover:text-blue-800 hover:underline">GPT-4 Developer Livestream.</a> <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLCBtJRMPXXZ4dmgCQ_X3DGTFNKjXdXFU" className="text-blue-600 hover:text-blue-800 hover:underline">MIT Embodied Intelligence Seminars.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">User Research and Early Product Building</span> <br /> Field Trip: <span className="font-bold">Low-altitude Economy, Shenzhen</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 7</th>
                                        <th className="py-3 px-4 font-medium">Robotics with Foundation Models</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://anthology-of-data.science/resources/prince2023udl.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">Understanding Deep Learning.</a> <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/live/6v6dbxPlsXs" className="text-blue-600 hover:text-blue-800 hover:underline">We, Robot | Tesla Cybercab Unveil.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Hands-on Projects with Foundation Models / Preparation for Group Project</span> </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 8</th>
                                        <th className="py-3 px-4 font-medium">Embodied AI on the Societal Impact</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://www.stateof.ai/2024" className="text-blue-600 hover:text-blue-800 hover:underline">State of AI Report 2024.</a> <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=R2meHtrO1n8" className="text-blue-600 hover:text-blue-800 hover:underline">Talk AI, Tech & the Future.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">Kicking Off Commercialization</span> <br /> Field Trip: <span className="font-bold">Autonomous Driving and Robotics, Guangzhou</span></th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 9</th>
                                        <th className="py-3 px-4 font-medium">Robotics in the Next Ten Years</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2211.06318" className="text-blue-600 hover:text-blue-800 hover:underline">Artificial Intelligence and Life in 2030.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Panel: <span className="font-bold">Will Robots Replace Humans</span> </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 10</th>
                                        <th className="py-3 px-4 font-medium">Principles and Techniques in AI-driven Robotics</th>
                                        <th className="py-3 px-4 text-left font-medium"><a target="_blank" rel="noopener noreferrer" href="https://people.disim.univaq.it/~costanzo.manes/EDU_stuff/Robotics_Modelling,%20Planning%20and%20Control_Sciavicco_extract.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">Robotics, Modelling, Planning and Control.</a></th>
                                        <th className="py-3 px-4 text-left font-medium">Poster Presentation <br /> Essay Sharing <br /> Field Trips Reflection </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 11</th>
                                        <th className="py-3 px-4 font-medium">AI-driven Robotics into the Future</th>
                                        <th className="py-3 px-4 text-left font-medium">-</th>
                                        <th className="py-3 px-4 text-left font-medium">Tutorial: <span className="font-bold">How to Raise Your First Round of Funding</span> </th>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 px-4 font-medium">Week 12</th>
                                        <th className="py-3 px-4 font-medium">Course Summary and Group Presentation</th>
                                        <th className="py-3 px-4 text-left font-medium">-</th>
                                        <th className="py-3 px-4 text-left font-medium">Group Presentation </th>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                    </div>



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* Alumni */}
                    {/* <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#alumni" className="scroll-mt-32 group flex items-center" id="alumni">
                                Alumni
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                            {[...members.values()].filter(member => member.keys.includes("Alumni")).map((member) => (
                                <div className="flex flex-col gap-3" key={member.name}>
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                        />
                                    </AspectRatio>
                                    <span className="font-bold text-xl">{member.name}</span>
                                    <span>{member.title}</span>
                                    <div className="flex flex-row gap-1 flex-wrap text-mgray text-sm">
                                        <span>
                                            Supervised by: 
                                        </span>
                                        {member.pi.map((pi, index) => (
                                            <div key={pi}>
                                                <Link href={"/member/#" + pi.toLowerCase().replace(/ /g, '_')} className="animated-underline" >{pi}</Link>
                                                {index < member.pi.length - 1 && (
                                                    <span className="select-none"> | </span>
                                                )}
                                            </div>
                                        ))} 
                                    </div>
                                    <div className="flex gap-3 flex-wrap">
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
                    </FadeIn> */}

{/* 

                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>
 */}


                </div>



                <div className="w-48 hidden 3xl:block"></div>



            </div>



        </main>
    );
}
