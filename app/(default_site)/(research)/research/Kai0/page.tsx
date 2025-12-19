import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Kai0 | HKU MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Kai0", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import './local.css'



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



import { EmailSubscribe } from "./mailing"



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
                <div className="w-full h-48 flex flex-row justify-center bg-fixed">
                    <div className="w-full h-full max-w-7xl px-6 flex flex-col justify-end pb-10 gap-6">
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




                <div className="w-full flex justify-center 2xl:justify-evenly">



                    {/* navigator */}
                    <div className="w-48 hidden 3xl:block">
                        <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                            <Link className="select-none flex items-center gap-3 group" href="#methodology">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Methodology
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#mode_consistency">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Mode Consistency
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#model_arithmetic">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Model Arithmetic
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#stage_advantage">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Stage Advantage
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#data">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Data / Infra
                                </span>
                            </Link>
                            <Link className="select-none flex items-center gap-3 group" href="#recipe">
                                <span className="border-l-2 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                                <span className="text-sm text-mgray group-hover:text-mred">
                                    Bottom Line / Recipe
                                </span>
                            </Link>
                        </div>
                    </div>
                    




                    {/* transferable */}
                    <div className="w-full max-w-7xl flex flex-col">


                        <div className="flex flex-col w-full gap-6 px-6">
                            <h1 className="font-bold text-t1 leading-tight">
                                How to Build Robust Live-streaming Robotic Manipulation from Scratch in One Day
                            </h1>
                            {/* <i>
                                TL;DR: In this blogpost, we investigate an effective pathway to achieve robost manipulation for live-streaming broadcast without heavy resources (compute, data, infra, etc.), just in one day.
                            </i> */}
                            <div className="flex flex-row gap-20 xl:gap-40">
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
                                    <h2>
                                        Challenge
                                    </h2>
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
                                    <h2>
                                        <Link className="text-mred animated-underline hover:text-mred" href="https://opendrivelab.com/cvpr2026/workshop" >
                                            At CVPR 2026
                                        </Link>
                                    </h2>
                                    <h2>
                                        X
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <EmailSubscribe />
                            </div>
                        </div>



                        {/* <Image
                            src="https://ik.imagekit.io/mmlab/mmlab@hku.jpg"
                            alt="Nashville" 
                            width={352}
                            height={384}
                            className="w-full h-6/12 object-cover object-center rounded-sm bg-gradient-loading select-none mt-20"
                        /> */}



                        <div className="w-full flex flex-col items-center my-20 px-6">
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl flex flex-col relative p-10 gap-6">
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-6 border-l-6 border-black"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-6 border-r-6 border-black"></div>
                                    <h2 className="text-3xl font-bold text-center">
                                        Veni, vidi, vici.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full max-w-4xl flex flex-row justify-end mt-6">
                                <i>Julius Caesar</i>
                            </div> 
                        </div>



                        <div className="flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Is massive scale the only path to robotic dexterity? While foundational models like Pi05 and GO-1 leverage massive compute and data to achieve task-generalization, we explore a "resource-aware" alternative for state-generalization. We present a comprehensive guideline for mastering long-horizon garment manipulation, taking a system from 0% to 100% reliability with a fraction of the standard cost—specifically, within 20 hours of human demonstration, 8*A100 gpus, rather than tens of thousands of hrs data and hundreds of GPUs which are typically required.
                            </p>
                            <div></div>
                        </div>
                        {/* Is massive scale the only path to robotic dexterity? While foundational models like Pi05 and GO-1 leverage massive compute and data to achieve task-generalization, we explore a "resource-aware" alternative for state-generalization. We present a comprehensive guideline for mastering long-horizon garment manipulation, taking a system from 0% to 100% reliability with a fraction of the standard cost—specifically, within 20 hours of human demonstration, 8*A100 gpus, rather than tens of thousands of hrs data and hundreds of GPUs which are typically required. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Our system enables collaborative, dual-arm robots to perform complex folding tasks over extended horizons (up to 6 minutes), demonstrating exceptional robustness to the compounding errors that plague collaborative handovers. This reliability extends to "in-the-wild" scenarios, handling interruptions and varied lighting with ease.
                            </p>
                            <div></div>
                        </div>
                        {/* Our system enables collaborative, dual-arm robots to perform complex folding tasks over extended horizons (up to 6 minutes), demonstrating exceptional robustness to the compounding errors that plague collaborative handovers. This reliability extends to "in-the-wild" scenarios, handling interruptions and varied lighting with ease. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                The core of our efficiency lies in a new philosophical approach to Imitation Learning:
                            </p>
                            <div></div>
                        </div>
                        {/* The core of our efficiency lies in a new philosophical approach to Imitation Learning: */}



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                                <li>
                                    <b>
                                        Mode Consistency:&nbsp;
                                    </b>
                                    We argue that not all data is created equal. By strictly aligning the human demonstration distribution (P<sub>train</sub>), the model's knowledge Q<sub>model</sub>, and the test-time distribution (P<sub>test</sub>), we minimize in-distribution shifts that lead to failure.
                                </li>
                                {/* We argue that not all data is created equal. By strictly aligning the human demonstration distribution ($P_{train}$), the model's knowledge ($Q_{model}$), and the test-time distribution ($P_{test}$), we minimize in-distribution shifts that lead to failure. */}
                                <li>
                                    <b>
                                        Model Arithmetic:&nbsp;
                                    </b>
                                    Rather than relying on a single checkpoint, we identify that models trained on different data subsets learn distinct manifolds. We introduce a "shortcut" to merge these manifolds—condensing several diverse models into a single, adaptive policy without the complexity of MoE architectures.
                                </li>
                                {/* Rather than relying on a single checkpoint, we identify that models trained on different data subsets learn distinct manifolds. We introduce a "shortcut" to merge these manifolds—condensing several diverse models into a single, adaptive policy without the complexity of MoE architectures. */}
                                <li>
                                    <b>
                                        Distribution-Aware Orchestration:&nbsp;
                                    </b>
                                    A specialized mechanism to handle the "last mile" of precision (the final 80-100% performance gain).
                                </li>
                                {/* A specialized mechanism to handle the "last mile" of precision (the final 80-100% performance gain). */}
                            </ol>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                This recipe is universally applicable, functioning across different embodiments (AgileX Piper, ARX X5) and model architectures (π series, x-VLA, GO-1), proving that efficient, high-performance manipulation is accessible without industrial-scale resources.
                            </p>
                            <div></div>
                        </div>
                        {/* This recipe is universally applicable, functioning across different embodiments (AgileX Piper, ARX X5) and model architectures (pi series, x-vla, go-1), proving that efficient, high-performance manipulation is accessible without industrial-scale resources. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We will release data, checkpoints, and host <Link className="text-mred animated-underline hover:text-mred" href="https://opendrivelab.com/cvpr2026/workshop" >Challenge</Link> in 2026.
                            </p>
                            <div></div>
                        </div>
                        {/* We will release data, checkpoints and host Challenge in 2026. */}




                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
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
                            <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
                                <Link href="#mode_consistency" className="scroll-mt-32 group flex items-center flex-row" id="mode_consistency">
                                    <h2>
                                        Mode Consistency: The "Whac-a-Mole" Problem / The Impossible Trinity / A Trilemma
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



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We assume that, for certain task, there exists a distribution P<sub>real</sub> consisting of all actions that can accomplish such task. Achieving robust manipulation is akin to solving a chaotic "whac-a-mole" problem between three distributions:
                            </p>
                            <div></div>
                        </div>
                        {/* We assume that, for certain task, there exists a distribution $$P_{real}$$ consisting of all actions that can accomplish such task. Achieving robust manipulation is akin to solving a chaotic "whac-a-mole" problem between three distributions:  */}



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                                <li>
                                    P<sub>train</sub> (human demonstration), collected from Q<sub>human</sub> (human expert policy). This is a subset of P<sub>real</sub>.
                                </li>
                                {/* $$P_{train}$$(human demonstration), collected from $$Q_{human}$$(human expert policy). This is a subset of $$P_{real}$$. */}
                                <li>
                                    Q<sub>model</sub> (action projection on model weights).
                                </li>
                                {/* $$Q_{model}$$(action projection on model weights). */}
                                <li>
                                    P<sub>test</sub> (executed action in the real-world), inferred from Q<sub>model</sub>. The part lies inside P<sub>real</sub> means success and outside means failure.
                                </li>
                                {/* $$P_{test}$$(executed action in the real-world), inferred from $$Q_{model}$$. The part lies inside $$P_{real}$$means success and outside means failure. */}
                            </ol>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Current training strategy, in most cases, imitation learning, can be interpreted as minimizing the KL(Q<sub>model</sub>|Q<sub>human</sub>) via P<sub>train</sub> (cite). This process yields a finetuned Q<sub>model</sub>, and deploying this model on real robots (denoted as Inference() function) give us P<sub>test</sub>. 
                            </p>
                            <div></div>
                        </div>
                        {/* Current training strategy, in most cases, imitation learning, can be interpreted as minimizing the $$KL(Q_{model}|Q_{human})$$ via $$P_{train}$$(cite). This process yields a finetuned $$Q_{model}$$, and deploying this model on real robots (denoted as $$Inference()$$ function) give us $$P_{test}$$.   */}



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fpqp.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>
                        


                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <iframe
                                    src="https://opendrivelab.github.io/FreeTacMan/3d_model/FreeTacMan_Model.html"
                                    className="w-[320px] md:w-[480px] lg:w-[640px] h-[240px] md:h-[360px] lg:h-[480px] border-2 md:border-4 border-white hover:border-[#174BE5] transition-colors duration-300 rounded-lg mx-auto"
                                ></iframe>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We found several key issues hiding in this process:
                            </p>
                            <div></div>
                        </div>
                        {/* We found several key issues hiding in this process:  */}



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                                <li>
                                    Misalignment between P<sub>train</sub> and P<sub>test</sub>, interpreted as many failure states do not exist in training data.
                                </li>
                                {/* Misalignment between $$P_{train}$$and $$P_{test}$$, interpreted as many failure states do not exist in training data. */}
                                <li>
                                    Misalignment between Q<sub>model</sub> and P<sub>test</sub>, shown as model inference results could be mis-deployed by the Inference() function and causes unexpected failure.
                                </li>
                                {/* Misalignment between $$Q_{model}$$ and $$P_{test}$$, shown as model inference results could be mis-deployed by the $$Inference()$$ function and causes unexpected failure. */}
                            </ol>
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fdagger.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fcontrol_curve.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Back to basics, we propose two "behind the scenes" strategies that actually work: 
                            </p>
                            <div></div>
                        </div>
                        {/* Back to basics, we propose two "behind the scenes" strategies that actually work:   */}



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                                <li>
                                    <b>
                                        Data augmentation.
                                    </b>
                                    <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-[lower-alpha] px-4 md:px-6 mt-3">
                                        <li>
                                            <b>
                                                Dagger-augmentation:&nbsp;
                                            </b>
                                            Offline demonstrations often miss some failure modes that only emerge during real-world deployment. We inject on-policy recovery trajectories, both heurisitic and iterative DAgger, to fill these missing modes. By integrating these "corrected" trajectories, we expand P<sub>train</sub> towards underrepresented but critical regions of P<sub>real</sub>. The learned policy Q<sub>model</sub> better covers these modes in P<sub>real</sub>, ensuring the execution P<sub>test</sub> is resilient to the inevitable drift found in P<sub>real</sub>. 
                                        </li>
                                        {/* Offline demonstrations often miss some failure modes that only emerge during real-world deployment. We inject on-policy recovery trajectories, both heurisitic and iterative DAgger, to fill these missing modes. By integrating these "corrected" trajectories, we expand $$P_{train}$$ towards underrepresented but critical regions of $$P_{real}$$. The learned policy $$Q_{model}$$ better covers these modes in $$P_{real}$$, ensuring the execution  $$P_{test}$$is resilient to the inevitable drift found in $$P_{real}$$.  */}
                                        <li>
                                            <b>
                                                Input/output Augmentation:&nbsp;
                                            </b>
                                            To further bridge the P<sub>train</sub> <i>vs.</i> P<sub>test</sub> gap, we employ two specific augmentations. At the output level, time-scaling introduces down-sampled trajectories to adapt to varying control frequencies, while at the input level, wrist-mirroring enhances the model's spatial understanding of dual-arm coordination.
                                        </li>
                                        {/* To further bridge the $$P_{train}$$ vs. $$P_{test}$$gap, we employ two specific augmentations. At the output level, time-scaling introduces down-sampled trajectories to adapt to varying control frequencies, while at the input level, wrist-mirroring enhances the model's spatial understanding of dual-arm coordination. */}
                                    </ol>
                                </li>
                                <li>
                                    <b>
                                        Inference Optimization.&nbsp;
                                    </b>
                                    To address the Inference() function from Q<sub>model</sub> to P<sub>test</sub>, we utilize Chunk-wise Temporal Smoothing coupled with Real-time Chunking (RTC cite). This effectively minimizes execution jitter and ensures the policy's intent translates flawlessly to real-robot execution.
                                </li>
                                {/* To address the $$Inference()$$ function from $$Q_{model}$$ to $$P_{test}$$, we utilize Chunk-wise Temporal Smoothing coupled with Real-time Chunking (RTC cite). This effectively minimizes execution jitter and ensures the policy's intent translates flawlessly to real-robot execution. */}
                            </ol>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10">
                                <ConsistencyBarChart1 />
                                <ConsistencyBarChart2 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Evolution of Data Collection / Figure description TODO
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10">
                                <ConsistencyBarChart3 />
                                <ConsistencyBarChart4 />
                                <ConsistencyBarChart5 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10">
                                <ConsistencyBarChart6 />
                                <ConsistencyBarChart7 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>




                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
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



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <b className="w-full leading-relaxed max-w-4xl">
                                How can we efficiently advance through iterative research cycles in embodied AI? 
                            </b>
                            <div></div>
                        </div>
                        {/* How can we efficiently advance through iterative research cycles in embodied AI?   */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Unlike traditional CV or NLP, robotic manipulation tasks—especially complex ones like garment manipulation—demand extensive real-world data collection. This creates a persistent dilemma: as we iteratively gather new data, how do we know it meaningfully improves the model, and when is it enough?  Retraining from scratch with the full dataset after each collection cycle is prohibitively expensive.
                            </p>
                            <div></div>
                        </div>
                        {/* Unlike traditional CV or NLP, robotic manipulation tasks—especially complex ones like garment manipulation—demand extensive real-world data collection. This creates a persistent dilemma: as we iteratively gather new data, how do we know it meaningfully improves the model, and when is it enough?  Retraining from scratch with the full dataset after each collection cycle is prohibitively expensive. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We propose <b>Model Arithmetic (MA)</b>: train only on newly collected data subsets, then merge the resulting model with previous ones <b>at the weight level</b>. Remarkably, this synthesis can even <b>surpass the performance of models trained on the entire dataset at once</b>.
                            </p>
                            <div></div>
                        </div>
                        {/* We propose Model Arithmetic (MA): train only on newly collected data subsets, then merge the resulting model with previous ones at the weight level[1]. Remarkably, this synthesis can even surpass the performance of models trained on the entire dataset at once. */}



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping1.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping_curve.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                <b>But how does MA work?</b> Our key insight: models trained on different data subsets actually learn distinct manifolds. MA acts as a shortcut to merge modes and knowledge from these diverse manifolds, ensuring mode consistency in the final model. This approach elegantly soaks up capabilities from each iteration without costly full retraining.
                            </p>
                            <div></div>
                        </div>
                        {/* But how does MA work? Our key insight: models trained on different data subsets actually learn distinct manifolds. MA acts as a shortcut to merge modes and knowledge from these diverse manifolds, ensuring mode consistency in the final model. This approach elegantly soaks up capabilities from each iteration without costly full retraining. */}




                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-4xl w-full">
                                <SoupingBarChart1 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Souping / Figure description TODO
                            </i>
                            <div></div>
                        </div>


                        
                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
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



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Long-horizon manipulation inheretly is hindered by a simple question: <b>given multiple plausible actions at the same state, which one actually makes progress?</b> It is illustrated in cases where visual differences are subtle but  result differences are huge given different actions. This is indeed why an advantage signal is needed (cite pi06).
                            </p>
                            <div></div>
                        </div>
                        {/* Long-horizon manipulation inheretly is hindered by a simple question: given multiple plausible actions at the same state, which one actually makes progress? It is illustrated in cases where visual differences are subtle but  result differences are huge given different actions. This is indeed why an advantage signal is needed (cite pi06）. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Prior approaches obtain advantage indirectly by scoring the current state and the post-action state, then taking their difference. This formulation treats advantage as the subtraction of two independently estimated state values, although advantage is inherently a <b>relational quantity</b> that depends on how an action transforms one state into another.
                            </p>
                            <div></div>
                        </div>
                        {/* Prior approaches obtain advantage indirectly by scoring the current state and the post-action state, then taking their difference. This formulation treats advantage as the subtraction of two independently estimated state values, although advantage is inherently a relational quantity that depends on how an action transforms one state into another. */}



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We take a more direct route by treating advantage as a direct modeling target, predicting relative improvement directly from paired observations rather than deriving it from value predictions. This recasts advantage estimation to a single prediction problem, avoiding error compounding and yielding a cleaner, more reliable state-to-state supervision signal.
                            </p>
                            <div></div>
                        </div>
                        {/* We take a more direct route by treating advantage as a direct modeling target, predicting relative improvement directly from paired observations rather than deriving it from value predictions. This recasts advantage estimation to a single prediction problem, avoiding error compounding and yielding a cleaner, more reliable state-to-state supervision signal. */}



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Ftechblog.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Figure description TODO
                            </i>
                            <div></div>
                        </div>
                        


                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Built on this, the Stage Advantage decomposes long-horizon manipulation into a sequence of semantic stages, each corresponding to a meaningful sub-goal in the task. Instead of evaluating actions against the full task horizon, it estimates whether each action is likely to advance the current stage, providing a stage-aware advantage signal for policy training. 
                            </p>
                            <div></div>
                        </div>
                        {/* Built on this, the Stage Advantage decomposes long-horizon manipulation into a sequence of semantic stages, each corresponding to a meaningful sub-goal in the task. Instead of evaluating actions against the full task horizon, it estimates whether each action is likely to advance the current stage, providing a stage-aware advantage signal for policy training.  */}


                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                The impact of these designs is evaluated through task success rate and the accuracy of progress estimation, as quantified by MAD in the following evaluation. 
                            </p>
                            <div></div>
                        </div>
                        {/* The impact of these designs is evaluated through task success rate and the accuracy of progress estimation, as quantified by MAD in the following evaluation.  */}


                        
                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10">
                                <ConsistencyBarChart8 />
                                <ConsistencyBarChart9 />
                                <ConsistencyBarChart10 />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl">
                                Inference Optimization Methods Comparison / Figure description TODO
                            </i>
                            <div></div>
                        </div>

                        

                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#data" className="scroll-mt-32 group flex items-center flex-row" id="data">
                                    <h2>
                                        Data / Infra
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
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#recipe" className="scroll-mt-32 group flex items-center flex-row" id="recipe">
                                    <h2>
                                        Bottom Line / Recipe
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
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl p-4 bg-background rounded-sm text-foreground/70">
                                @article&#123;kaimanipteam2025kai0,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>author = &#123;KAI Manipulation Team&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>title = &#123;XXX&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>journal = &#123;HKU MMLab Research Blog&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>year = &#123;2025&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>note = &#123;https://mmlab.hk/research/Kai0&#125;,
                                <br></br>
                                &#125;
                            </p>
                            <div></div>
                        </div>



                    </div>



                <div className="w-48 hidden 3xl:block"></div>
            </div>
        </main>
    );
}
