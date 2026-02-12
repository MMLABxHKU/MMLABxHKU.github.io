import Link from "next/link";
import Image from "next/image";


import { Separator } from "@/components/ui/separator"

import {EmailSubscribe} from "./mailing"
import HeroVideo from "./video"

export const metadata = {
  title: "MM-Hand 1.0 | HKU MMLab",
  description: "Preorder MM-Hand 1.0",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* Tailwind 自定义样式 */}
      <style>{`
        @keyframes hover-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-hover-scale {
          animation: hover-scale 0.3s ease-in-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 6s ease infinite;
        }
      `}</style>




      {/* 背景光晕 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/3 w-[600px] h-[600px] bg-purple-950/30 blur-[350px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-950/30 blur-[300px] rounded-full" />
      </div>




      {/* 顶部浮动按钮 */}
      <header>

        {/* 右上角按钮 */}
        <div className="fixed top-6 right-6 z-50 flex gap-3">
          {/* Community */}
          <div className="rounded-xl p-[2px] bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 animate-gradient">
            <div className="bg-black/20 backdrop-blur-xl rounded-xl px-6 py-2 hover:bg-white/10 transition animate-hover-scale">
              <Link href="https://discord.gg/zQrepqFyEy" target="_blank" className="select-none">Community</Link>
            </div>
          </div>

          {/* Preorder */}
          <div className="rounded-xl p-[2px] bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 animate-gradient">
            <div className="bg-black/20 backdrop-blur-xl rounded-xl px-6 py-2 hover:bg-white/10 transition animate-hover-scale">
              <Link href="#preorder" className="select-none">Preorder</Link>
            </div>
          </div>
        </div>
      </header>




{/* 视频模块 */}
<section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 md:py-24">

  {/* 给手机端顶部留出 fixed header 空间 */}
  <div className="pt-20 md:pt-0" />

  <div className="w-full max-w-[1800px] mx-auto">
    <div className="relative rounded-3xl p-[2px] bg-white shadow-[0_0_80px_rgba(255,255,255,0.05)] animate-gradient">
      
      <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-black/20 border border-white/10">
            <HeroVideo />
      </div>
    </div>
  </div>

  {/* 描述文字 */}
  <div className="mt-6 text-center relative z-10">
    <p className="text-xl md:text-3xl font-semibold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      Available in June 2026
    </p>
  </div>

</section>


{/* Features Section */}
<div className="w-full px-6 md:px-20 py-32 flex justify-center">
  <div className="w-full max-w-5xl flex flex-col gap-20">

    {/* Section Title */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Features
      </h2>
      <Separator className="mt-6 w-24" />
    </div>

    {/* Feature List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">21</p>
        <p className="text-muted-foreground">
Fully actuated degree-of-freedom        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">~350 Gram</p>
        <p className="text-muted-foreground">
Hand weight without remote motors        </p>
      </div>

            <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">Never overheating</p>
        <p className="text-muted-foreground">
          With remote actuation
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">15</p>
        <p className="text-muted-foreground">
 Tactile sensors with 1mm spatial and 0.1N force resolution        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">2</p>
        <p className="text-muted-foreground">
Palm cameras with 140° FoV and controllable LED        </p>
      </div>

            <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">21</p>
        <p className="text-muted-foreground">
Finger joint angle sensors        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">21</p>
        <p className="text-muted-foreground">
Tension sensing & self-tighting devices        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">Tendon Connectors</p>
        <p className="text-muted-foreground">
For rapid finger / motor replacement        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">SPI/I2C</p>
        <p className="text-muted-foreground">
Interfaces for in-hand sensors        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">TTL/CAN</p>
        <p className="text-muted-foreground">
Interfaces for standard motors        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">3D-printed Structure</p>
        <p className="text-muted-foreground">
For easy mechanical modifications        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">Arduino</p>
        <p className="text-muted-foreground">
For easy software modifications        </p>
      </div>
                  <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">Fully Open-source</p>
        <p className="text-muted-foreground">
CAD, assembly guide, electronics, and software        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-4xl font-bold">1,400 USD</p>
        <p className="text-muted-foreground">
          Material cost
        </p>
      </div>

    </div>

  </div>
</div>




<EmailSubscribe />

    </main>
  );
}
