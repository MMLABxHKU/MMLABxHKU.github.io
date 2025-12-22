import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Kai0 | HKU MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Kai0", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



// import './local.css'



// import { ExampleChart } from "./chart/examplechart"
// import { ExampleBarChart } from "./chart/barchart"



import { ConsistencyBarChart1 } from "./chart/consistency/consistency1"
import { ConsistencyBarChart2 } from "./chart/consistency/consistency2"
import { ConsistencyBarChart3 } from "./chart/consistency/consistency3"
import { ConsistencyBarChart4 } from "./chart/consistency/consistency4"
import { ConsistencyBarChart5 } from "./chart/consistency/consistency5"
import { ConsistencyBarChart6 } from "./chart/consistency/consistency6"
import { ConsistencyBarChart7 } from "./chart/consistency/consistency7"
import { ConsistencyBarChart8 } from "./chart/consistency/consistency8"
import { ConsistencyBarChart9 } from "./chart/consistency/consistency9"
import { ConsistencyBarChart10 } from "./chart/consistency/consistency10"
import { SoupingBarChart1 } from "./chart/souping/souping1"
import { AdvantageBarChart1 } from "./chart/advantage/advantage1"
import { AdvantageBarChart2 } from "./chart/advantage/advantage2"
import { AdvantageBarChart3 } from "./chart/advantage/advantage3"
import { StageVideo1 } from "./stage/stage1"
import { ProgressBar } from "./progress-bar"
import Citation from "./citation"



import ShareLink from "./share"
import { EmailSubscribe } from "./mailing"
import TextTip from "@/components/diy/textTip/textTip"



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
            {/* Progress Bar */}
            <ProgressBar />

            {/* Spacer for top positioning */}
            <div className="w-full h-48"></div>

            {/* navigator - hover to reveal */}
            <div className="fixed left-0 top-0 h-full w-8 z-40 hidden lg:block group/nav">
                    {/* Hover trigger zone */}
                    <div className="absolute left-0 top-0 h-full w-8" />
                    
                    {/* Navigator panel */}
                    <div className="absolute left-0 top-0 h-full w-48 pl-6 pt-20 bg-gradient-to-r from-neutral-900/95 to-neutral-900/80 backdrop-blur-sm border-r border-neutral-700/50 -translate-x-full opacity-0 group-hover/nav:translate-x-0 group-hover/nav:opacity-100 transition-all duration-300 ease-out shadow-2xl shadow-black/50">
                        <div className="flex flex-col gap-3">
                            <Link className="select-none flex items-center gap-3 group" href="#introduction">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Introduction
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#methodology">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Methodology
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#mode_consistency">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Mode Consistency
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#model_arithmetic">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Model Arithmetic
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#stage_advantage">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Stage Advantage
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#citation">
                                <span className="border-l-2 border-l-neutral-500 text-[8pt] group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-[8pt] text-neutral-400 group-hover:text-mred">
                                    Citation
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* Main content - centered */}
                <div className="max-w-6xl mx-auto flex flex-col">

                        <div className="w-full flex flex-row justify-center">
                            <div className="flex flex-col w-full gap-6 px-6 max-w-3xl">
                                <h1 className="font-bold text-3xl leading-tight">
                                    Is massive scale the only path to robotic dexterity? A $100,000 from-zero-to-hero recipe for garment manipulation
                                </h1>
                                {/* <i>
                                    TL;DR: In this blogpost, we investigate an effective pathway to achieve robost manipulation for live-streaming broadcast without heavy resources (compute, data, infra, etc.), just in one day.
                                </i> */}
                                <div className="flex flex-row gap-10 xl:gap-40">
                                    <div className="flex flex-col">
                                        <h2>
                                            Published
                                        </h2>
                                        <h2>
                                            Paper
                                        </h2>
                                        <h2>
                                            Email
                                        </h2>
                                        <h2>
                                            By
                                        </h2>
                                        {/* <h2>
                                            Challenge
                                        </h2> */}
                                        <h2>
                                            Share
                                        </h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2>
                                            December 24, 2025
                                        </h2>
                                        <h2>
                                            Available in Late January 2026
                                        </h2>
                                        <h2>
                                            <Link className="text-mred animated-underline hover:text-mred" href="mailto:research@mmlab.hk" >
                                                research@mmlab.hk
                                            </Link>
                                        </h2>
                                        <h2>
                                            HKU Manipulation Team
                                        </h2>
                                        {/* <h2>
                                            <Link className="text-mred animated-underline hover:text-mred" href="https://opendrivelab.com/cvpr2026/workshop" >
                                                At CVPR 2026
                                            </Link>
                                        </h2> */}
                                        <h2 className="flex flex-row items-center flex-wrap">
                                            <ShareLink
                                                platform="X"
                                                url="https://mmlab.hk/research/Kai0"
                                            />
                                            <span className="inline-block text-xs select-none">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <ShareLink
                                                platform="LinkedIn"
                                                url="https://mmlab.hk/research/Kai0"
                                            />
                                            <span className="inline-block text-xs select-none">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <ShareLink
                                                platform="Reddit"
                                                url="https://mmlab.hk/research/Kai0"
                                            />
                                            <span className="inline-block text-xs select-none">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <ShareLink
                                                platform="Facebook"
                                                url="https://mmlab.hk/research/Kai0"
                                            />
                                            <span className="inline-block text-xs select-none">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <ShareLink
                                                platform="Reddit"
                                                url="https://mmlab.hk/research/Kai0"
                                            />                                            
                                            <span className="inline-block text-xs select-none">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <ShareLink
                                                platform="URL"
                                                url="https://mmlab.hk/research/Kai0"
                                            />
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="mt-20 px-6">
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/FoldAnything/full.png"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/FoldAnything/opening_Dec22_demo_v1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        {/* <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-6xl">
                                Video Description todo
                            </i>
                            <div></div>
                        </div> */}



                        <div className="w-full flex flex-col items-center my-20 px-6">
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-3xl flex flex-col relative p-10 gap-6">
                                    <div className="absolute top-0 left-0 xl:left-64 w-8 h-8 border-t-6 border-l-6 border-white"></div>
                                    <div className="absolute bottom-0 right-0 xl:right-64 w-8 h-8 border-b-6 border-r-6 border-white"></div>
                                    <h2 className="text-3xl font-bold text-center">
                                        Veni, vidi, vici.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full max-w-3xl flex flex-row justify-end mt-6 xl:pr-64">
                                <i>Julius Caesar</i>
                            </div> 
                        </div>
                    


                        <div id="introduction" className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    "Veni, Vidi, Vici" — I came, I saw, I conquered. Just as Julius Caesar's swift victory at Zela defined strategic efficiency, we aim to conquer the "Mount Everest" of robotics: 100% reliability in real-world garment manipulation. In this mission, Veni (data collection), Vidi (model training), and Vici (real-robot inference) form a progressive, interlocking chain where every link is critical. While foundational models like Pi0 and GO-1 rely on "brute-force" scale to reach these heights, we present a resource-aware alternative. We demonstrate how to take a system from 0% to 100% reliability using a fraction of the standard cost—specifically, within 20 hours of human demonstration and 8×A100 GPUs, rather than the tens of thousands of hours and hundreds of GPUs typically required.
                                    <br></br>
                                    We achieve this through a three-stage technical philosophy that optimizes the transition from seeing to conquering:

                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        {/* <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-3xl">
                            Our system enables dual-arm robots to master complex, long-horizon folding tasks (up to 6 minutes), maintaining exceptional robustness against compounding errors and "in-the-wild" environmental shifts.
                            </p>
                            <div></div>
                        </div> */}
                        {/* Our system enables collaborative, dual-arm robots to perform complex folding tasks over extended horizons (up to 6 minutes), demonstrating exceptional robustness to the compounding errors that plague collaborative handovers. This reliability extends to "in-the-wild" scenarios, handling interruptions and varied lighting with ease. */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-decimal px-6">
                                    <li>
                                        <b>
                                            Mode Consistency:&nbsp;
                                        </b>
                                        We argue that not all data is created equal. By strictly aligning the human demonstration distribution (P<sub>train</sub>), the model's knowledge (Q<sub>model</sub>), and the test-time distribution (P<sub>test</sub>), we minimize in-distribution shifts that lead to failure.
                                    </li>
                                    <li>
                                        <b>
                                            Model Arithmetic:&nbsp;
                                        </b>
                                        We move beyond the search for a single perfect checkpoint. We introduce a weight-space shortcut to merge models trained on different data manifolds into a single, adaptive policy—capturing diverse knowledge without the architectural complexity of MoE.
                                    </li>
                                    <li>
                                        <b>
                                            Stage Advantage:&nbsp;
                                        </b>
                                        To conquer the "last mile", we decompose tasks into semantic stages. By estimating a stage-aware advantage signal, we provide the model with "long-horizon vision," ensuring every action makes measurable progress toward the goal.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    This recipe provide strong evidence that 100% robotic skill mastery is a matter of strategic alignment, not just massive scale. We will release data, checkpoints, and host <a class="text-mred animated-underline hover:text-mred" href="https://opendrivelab.com/cvpr2026/workshop" target="_blank">Challenge</a> in 2026.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        {/* <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-3xl">
                                We will release data, checkpoints, and host <Link className="text-mred animated-underline hover:text-mred" href="https://opendrivelab.com/cvpr2026/workshop" >Challenge</Link> in 2026.
                            </p>
                            <div></div>
                        </div> */}
                        {/* We will release data, checkpoints and host Challenge in 2026. */}



                        <div className="mt-10 w-full flex flex-row justify-center px-6">
                            <div className="w-full grid grid-rows-3 xl:grid-rows-1 xl:grid-cols-3 gap-6 justify-center items-center">
                                <video
                                    autoPlay muted loop controls playsInline
                                    poster="https://assets.kinetixai.cn/FoldAnything/step_1.png"
                                    className="max-w-xl w-full aspect-video rounded-sm"
                                >
                                    <source src="https://assets.kinetixai.cn/FoldAnything/step_1.mp4" type="video/mp4" />
                                </video>
                                <video
                                    autoPlay muted loop controls playsInline
                                    poster="https://assets.kinetixai.cn/FoldAnything/step_2.png"
                                    className="max-w-xl w-full aspect-video rounded-sm"
                                >
                                    <source src="https://assets.kinetixai.cn/FoldAnything/step_2.mp4" type="video/mp4" />
                                </video>
                                <video
                                    autoPlay muted loop controls playsInline
                                    poster="https://assets.kinetixai.cn/FoldAnything/step_3.png"
                                    className="max-w-xl w-full aspect-video rounded-sm"
                                >
                                    <source src="https://assets.kinetixai.cn/FoldAnything/step_3.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center text-muted-foreground">
                                Three tasks varying from folding to hanging, each covering a 4-hour duration, presented in 100x time-lapse format with critical segments highlighted at 2-5x speed.
                            </i>
                            <div></div>
                        </div>



                        <div className="px-6">
                            <video
                                autoPlay muted loop playsInline
                                poster="https://assets.kinetixai.cn/FoldAnything/pipeling.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/FoldAnything/full_Dec22_4k_30_v3.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center z-50">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-6xl text-muted-foreground text-center">
                                The Mode Consistency System architecture. Left: The human expert demonstration collection. Middle: Mixing models from different data sources via Model Arithmetic. Right: The real-robot inference. Bottom: The DAgger Feedback and Stage Advantage from on-policy experience.
                            </i>
                            <div></div>
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-20 text-3xl font-bold"> 
                                <Link href="#metholody" className="scroll-mt-32 group flex items-center flex-row" id="methodology">
                                    <h2>
                                        Methodology
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

                        
                        
                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-10 text-xl font-bold"> 
                                <Link href="#mode_consistency" className="scroll-mt-32 group flex items-center flex-row" id="mode_consistency">
                                    <h2>
                                        Mode Consistency: Addressing the Distributional Trilemma
                                    </h2>
                                    <div className="min-w-12 select-none">
                                        <span className="ml-6 hidden group-hover:inline-block size-4 text-foreground">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                            </svg>
                                        </span> 
                                    </div>
                                </Link>
                            </h2>
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    We define the solution space for a given task as P<sub>real</sub>, a distribution encompassing all valid actions that successfully accomplish the task. Achieving robust manipulation can be conceptualized as solving a dynamic alignment problem—akin to a game of "Whac-a-Mole"—among three distinct distributions:
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-decimal px-6">
                                    <li>
                                        P<sub>train</sub> (Human Demonstrations): The empirical distribution collected from the human expert policy, Q<sub>human</sub>. This represents a limited subset of the valid solution manifold P<sub>real</sub>.
                                    </li>
                                    <li>
                                        Q<sub>model</sub> (Learned Policy): The policy distribution parameterized by the model weights.
                                    </li>
                                    <li>
                                        P<sub>test</sub> (Real-World Execution): The actual distribution of actions executed during physical deployment, inferred from Q<sub>model</sub>. Success is defined by the intersection of P<sub>test</sub> and P<sub>real</sub>, while the portion of P<sub>test</sub> failling outside P<sub>real</sub> constitutes the failure modes.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>

                        
                        
                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-3xl">
                                    Standard imitation learning paradigms generally aim to minimize the divergence KL(Q<sub>model</sub>|Q<sub>human</sub>) over the support of P<sub>train</sub><sup>1</sup><sup>2</sup>. This process yields a finetuned Q<sub>model</sub>; deploying this model via an inference function (denoted as <i>Inference()</i>) results in the realized distribution P<sub>test</sub>. 
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://arxiv.org/abs/2510.18874',
                                    content: (
                                        <>
                                        Retaining by Doing (Chen et al., 2025)
                                        </>
                                    ),
                                },
                                2:{
                                    link:'https://arxiv.org/abs/2404.14367',
                                    content: (
                                        <>
                                        Preference Fine-Tuning (Tajwar et al., 2024)
                                        </>
                                    ),
                                }
                            }}
                            offset={0}
                            />
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fpqp_1220_1258.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words  text-muted-foreground">
                                Distribution dynamics of <b>P<sub>train</sub></b> <b>Q<sub>model</sub></b> and <b>P<sub>test</sub></b>.
                                {/* <p>
                                P<sub>train</sub> = ExpertDemo(Q<sub>human</sub>), 
                                Q<sub>model</sub> = Train(P<sub>train</sub>), 
                                P<sub>test</sub> = Inference(Q<sub>model</sub>)
                                </p> */}
                            </i>
                            <div></div>
                        </div>
                        


                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-3xl w-full flex flex-row gap-10 justify-center ">
                                <iframe
                                    src="https://assets.kinetixai.cn/FoldAnything/combined_tsne_black_bias_5000sample_5000iter.html"
                                    width="800"
                                    height="450"
                                    className="rounded-sm w-[800px]"
                                    scrolling="no"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                            This interactive 3D t-SNE visualizes the action distributions of P<sub>train</sub>, Q<sub>model</sub>, and P<sub>test</sub>. <b>Try to click the Control Optimize and drag to rotate the plot.</b>
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-3xl">
                                However, we identify latent inconsistencies within this standard process:
                            </p>
                            <div></div>
                        </div>
                        {/* We found several key issues hiding in this process:  */}



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-3xl list-decimal px-6">
                                <li>
                                    Distribution Shift between P<sub>train</sub> and P<sub>test</sub>: Interpreted as covariate shift, where the model encounters states during deployment that were absent in the training data.
                                </li>
                                {/* Misalignment between $$P_{train}$$and $$P_{test}$$, interpreted as many failure states do not exist in training data. */}
                                <li>
                                    Deployment Discrepancy between Q<sub>model</sub> and P<sub>test</sub>: Arising from the <i>Inference()</i> function, where the model output is distorted during control, leading to unexpected failures.
                                </li>
                                {/* Misalignment between $$Q_{model}$$ and $$P_{test}$$, shown as model inference results could be mis-deployed by the $$Inference()$$ function and causes unexpected failure. */}
                            </ol>
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fdagger_1220_1258.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words  text-muted-foreground">
                                <b>Dagger</b>: Injecting on-policy recovery trajectories to expand P<sub>train</sub> towards underrepresented failure modes in P<sub>real</sub>.
                            </i>
                            <div></div>
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fcontrol_curve_1220_1258.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                                <b>Inference Optimization</b>: Minimizing execution jitter to ensure smooth translation from Q<sub>model</sub> to P<sub>test</sub>.
                            </i>
                            <div></div>
                        </div>


                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Back to basics, we propose two fundamental strategies—operating on Data Scope and Inference Scope—to stabilize these distributions: 
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed max-w-3xl list-decimal px-6">
                                    <li>
                                        <b>
                                            Data Scope:
                                        </b>
                                        <ol class="space-y-3 w-full leading-relaxed max-w-3xl list-[lower-alpha] px-6 mt-3">
                                            <li>
                                                <b>
                                                    DAgger (Iterative Correction):&nbsp;
                                                </b>
                                                Static offline demonstrations often lack exposure to failure modes that inevitably emerge during real-world deployment<sup>1</sup><sup>2</sup>. We inject on-policy recovery trajectories - utilizing both heuristic methods and iterative DAgger - to populate these sparse regions. By integrating these "corrected" trajectories, we expand P<sub>train</sub> towards underrepresented but critical regions of P<sub>real</sub>. Consequently, the learned policy Q<sub>model</sub> achieves better coverage of the solution manifold P<sub>real</sub>, ensuring that P<sub>test</sub> remains resilient to the drift inherent in real-world physics P<sub>real</sub>. 
                                            </li>
                                            <li>
                                                <b>
                                                    Spatio-Temporal Augmentation:&nbsp;
                                                </b>
                                                To further bridge the gap between P<sub>train</sub> and P<sub>test</sub>, we employ structured augmentations across space and time. Spatially, we utilize mirroring and symmetry to enhance the model's understanding of dual-arm coordination and equivariance. Temporally, time-scaling introduces variability in trajectory speed, allowing the model to adapt to fluctuating control frequencies.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <b>
                                            Inference Scope:&nbsp;
                                        </b>
                                        To optimize the translation of Q<sub>model</sub> into P<sub>test</sub> via the <i>Inference()</i> function, we utilize Chunk-wise Temporal Smoothing coupled with Real-time Chunking<sup>3</sup>. This effectively minimizes execution jitter and ensures the policy's intended actions are translated flawlessly into smooth, coherent real-robot execution. And we found that such smoothness contributes much to the final performance, i,e, success rate.
                                    </li>
                                </ol>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://arxiv.org/abs/1011.0686',
                                    content: (
                                        <>
                                        DAgger (Ross et al., 2011)
                                        </>
                                    ),
                                },
                                2:{
                                    link:'https://arxiv.org/abs/1810.02890',
                                    content: (
                                        <>
                                        HG-DAgger (Kelly et al., 2018)
                                        </>
                                    ),
                                },
                                3:{
                                    link:'https://arxiv.org/abs/2506.07339',
                                    content: (
                                        <>
                                        Real-Time Action Chunking (Black et al., 2025)
                                        </>
                                    ),
                                },
                            }}
                            offset={2}
                            />
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <ConsistencyBarChart1 />
                                <ConsistencyBarChart2 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                                Improved data collection methods and on-policy recovery trajectories effectively enhance the model's error recovery capability, significantly increasing success rate and reducing recovery cost.
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <ConsistencyBarChart3 />
                                <ConsistencyBarChart4 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                                Time scaling affects success rate to some extent while maintaining throughput without significant degradation, especially for models predicting delta actions.
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <ConsistencyBarChart5 />
                                <ConsistencyBarChart6 />
                                <ConsistencyBarChart7 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                                Space mirroring augmentation comprehensively improves the model's overall performance across all metrics.
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <ConsistencyBarChart8 />
                                <ConsistencyBarChart9 />
                                <ConsistencyBarChart10 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center break-words text-muted-foreground">
                                Inference optimization through chunk-wise temporal smoothing and real-time chunking ensures the policy's intended actions are translated flawlessly into smooth, coherent real-robot execution.
                            </i>
                            <div></div>
                        </div>


                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-10 text-xl font-bold"> 
                                <Link href="#model_arithmetic" className="scroll-mt-32 group flex items-center flex-row" id="model_arithmetic">
                                    <h2>
                                        Model Arithmetic
                                    </h2>
                                    <div className="min-w-12 select-none">
                                        <span className="ml-6 hidden group-hover:inline-block size-4 text-foreground">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                            </svg>
                                        </span> 
                                    </div>
                                </Link>
                            </h2>
                        </div>



                        {/* <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <b className="w-full leading-relaxed max-w-3xl">
                                How can we efficiently advance through iterative research cycles in embodied AI? 
                            </b>
                            <div></div>
                        </div> */}
                        {/* How can we efficiently advance through iterative research cycles in embodied AI?   */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    <b>How can we efficiently advance through iterative research cycles in embodied AI?</b> Unlike traditional CV or NLP, robotic manipulation tasks—especially complex ones like garment manipulation—demand extensive real-world data collection. This creates a persistent dilemma: as we iteratively gather new data, how do we know it meaningfully improves the model, and when is it enough?  Retraining from scratch with the full dataset after each collection cycle is prohibitively expensive.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-3xl">
                                    We propose <b>Model Arithmetic (MA)</b>: train only on newly collected data subsets, then merge the resulting model with previous ones through <b>weight interpolation<sup>1</sup> guided by on-policy optimization</b>. Remarkably, this synthesis can even <b>surpass the performance of models trained on the entire dataset at once</b>.
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://proceedings.mlr.press/v162/wortsman22a.html',
                                    content: (
                                        <>
                                        Model Soups (Wortsman et al., 2021)
                                        </>
                                    ),
                                }
                            }}
                            offset={5}
                            />
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping1_1220_1254.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center text-muted-foreground">
                                We merge models trained on different data subsets into a single entity using weight interpolation, with the mixing weights optimized against on-policy data.
                            </i>
                            <div></div>
                        </div>



                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping_curve.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center">
                                caption
                            </i>
                            <div></div>
                        </div> */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    <b>But how does MA work?</b> Our key insight: models trained on different data subsets actually learn distinct manifolds. MA acts as a shortcut to merge modes from these diverse manifolds, ensuring mode consistency in the final model. This approach soaks up capabilities from each iteration without costly full retraining.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-2">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed text-muted-foreground italic text-xs">
                                    MA differs fundamentally from existing paradigms: unlike Mixture-of-Experts (MoE), it requires no router mechanism; unlike ensembling, it manipulates model weights directly rather than combining outputs at inference time. This makes MA a uniquely powerful strategy for scalable, iterative model development in embodied AI.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <SoupingBarChart1 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center text-muted-foreground">
                                The merged model surpasses both the best constituent models and the oracle model trained on the full dataset across multiple tasks, evidencing that Model Arithmetic successfully assimilates the distinct policy manifolds learned from diverse data subsets.
                            </i>
                            <div></div>
                        </div>


                        
                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-10 text-xl font-bold"> 
                                <Link href="#stage_advantage" className="scroll-mt-32 group flex items-center flex-row" id="stage_advantage">
                                    <h2>
                                        Stage Advantage
                                    </h2>
                                    <div className="min-w-12 select-none">
                                        <span className="ml-6 hidden group-hover:inline-block size-4 text-foreground">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                                <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                            </svg>
                                        </span> 
                                    </div>
                                </Link>
                            </h2>
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-3xl">
                                    Long-horizon manipulation inheretly is hindered by a simple question: <b>given multiple plausible actions at the same state, which one actually makes progress?</b> It is illustrated in cases where visual differences are subtle but  result differences are huge given different actions. This is indeed why an advantage signal is needed<sup>1</sup>.
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://www.pi.website/blog/pistar06',
                                    content: (
                                        <>
                                        π<sub>0.6</sub><sup>*</sup>: a VLA that Learns from Experience (2025)
                                        </>
                                    ),
                                }
                            }}
                            offset={6}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Prior approaches obtain advantage indirectly by scoring the current state and the post-action state, then taking their difference. This formulation treats advantage as the subtraction of two independently estimated state values, although advantage is inherently a <b>relational quantity</b> that depends on how an action transforms one state into another.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    We take a more direct route by treating advantage as a direct modeling target, predicting relative improvement directly from paired observations rather than deriving it from value predictions. This recasts advantage estimation to a single prediction problem, avoiding error compounding and yielding a cleaner, more reliable state-to-state supervision signal.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>


                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Ftechblog.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center">
                                caption
                            </i>
                            <div></div>
                        </div> */}


                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-6xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fstage_advantage_1220_0116.jpg"
                                    alt="Stage Advantage" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div> */}
                        <StageVideo1 />



                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center text-muted-foreground">
                                Illustration of the estimated progress given a video clip. Direct+Stage (ours) has better stability in progress estimation.
                            </i>
                            <div></div>
                        </div>
                        


                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Built on this, the Stage Advantage decomposes long-horizon manipulation into a sequence of semantic stages, each corresponding to a meaningful sub-goal in the task. Instead of evaluating actions against the full task horizon, it estimates whether each action is likely to advance the current stage, providing a stage-aware advantage signal for policy training. 
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    The impact of these designs is evaluated using a combination of task success rate and the quality of the advantage signal, measured in terms of temporal smoothness and stability, as reported in the following evaluation.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>


                        
                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <AdvantageBarChart1 />
                                <AdvantageBarChart2 />
                                <AdvantageBarChart3 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-3xl text-center text-muted-foreground">
                                Value-diff (pistar06-style): compute advantage by subtracting two independently predicted state values; Direct: predict advantage as relative improvement from paired observations; Direct+Stage: stage-conditioned direct advantage prediction for long-horizon training. Direct+Stage (ours) is smoother (lower MSTD), more stable (higher SFR) and more reliable (higher success rate).
                            </i>
                            <div></div>
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-20 text-3xl font-bold"> 
                                <Link href="#conclusion" className="scroll-mt-32 group flex items-center flex-row" id="conclusion">
                                    <h2>
                                        Conclusion
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



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-decimal px-6 text-muted-foreground">
                                    <li>
                                        <span class="text-foreground font-medium">Not all robot data is created equal.</span> The quality and characteristics of training data significantly impact policy performance.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">The capability of the base policy is crucial, but knowing how to rapidly evaluate and select a capable base policy is even more important.</span> A fast research iteration cycle is essential for developing intuition and understanding of base policy behavior.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">Model arithmetic can surprisingly turn lead into gold.</span> Simple arithmetic operations on model weights can transform mediocre policies into high-performing ones.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">Stage-conditioned advantage estimation still has room for improvement.</span> Revisiting fundamental concepts from reinforcement learning may unlock further gains.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-3xl mt-20 text-3xl font-bold"> 
                                <Link href="#citation" className="scroll-mt-32 group flex items-center flex-row" id="citation">
                                    <h2>
                                        Citation
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
                        <Citation/>



                        {/* Newsletter subscription */}
                        <div className="mt-24 mb-10 px-6">
                            <EmailSubscribe />
                        </div>



                </div>

        </main>
    );
}
