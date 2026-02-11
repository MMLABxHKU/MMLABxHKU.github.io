import Link from "next/link";
import Image from "next/image";



import {EmailSubscribe} from "./mailing"

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
<section className="w-full py-24 px-6 relative">
  <div className="w-[90vw] max-w-[1800px] mx-auto">
    <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 shadow-[0_0_80px_rgba(255,255,255,0.05)] animate-gradient">
      <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-black/20 border border-white/10">
        <div className="w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://assets.kinetixai.cn/rise/orz.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>

  {/* 视频下方描述，放在容器外面 */}
  <div className="mt-6 text-center relative z-10">
    <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr text-white animate-gradient drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      Available in June 2026
    </p>
  </div>
</section>





<EmailSubscribe />

    </main>
  );
}
