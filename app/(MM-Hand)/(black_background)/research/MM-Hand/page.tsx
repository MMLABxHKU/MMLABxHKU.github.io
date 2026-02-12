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
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-emerald-950 text-white overflow-x-hidden relative">

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Space Mono', monospace;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Orbitron', sans-serif;
        }
        
        @keyframes hover-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3),
                        0 0 40px rgba(16, 185, 129, 0.2),
                        inset 0 0 20px rgba(16, 185, 129, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.5),
                        0 0 60px rgba(16, 185, 129, 0.3),
                        inset 0 0 30px rgba(16, 185, 129, 0.2);
          }
        }
        

        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-hover-scale {
          animation: hover-scale 0.3s ease-in-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 8s ease infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-flicker {
          animation: flicker 2s ease-in-out infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        
        .tech-border {
          position: relative;
        }
        
        .tech-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid rgba(16, 185, 129, 0.3);
          clip-path: polygon(
            0 20px, 20px 0,
            calc(100% - 20px) 0, 100% 20px,
            100% calc(100% - 20px), calc(100% - 20px) 100%,
            20px 100%, 0 calc(100% - 20px)
          );
          pointer-events: none;
        }
        
        .corner-accent {
          position: relative;
        }
        
        .corner-accent::after {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          width: 20px;
          height: 20px;
          border-top: 2px solid #10b981;
          border-left: 2px solid #10b981;
        }
        
        .corner-accent::before {
          content: '';
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 20px;
          height: 20px;
          border-bottom: 2px solid #10b981;
          border-right: 2px solid #10b981;
        }
      `}</style>

      {/* Background grid pattern */}
      <div className="fixed inset-0 -z-10 grid-pattern opacity-50" />

      {/* Ambient glow effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-300px] left-1/4 w-[800px] h-[800px] bg-emerald-500/10 blur-[200px] rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-teal-500/10 blur-[190px] rounded-full animate-float" style={{animationDelay: '4s'}} />
      </div>

      {/* Header */}
      <header>
        <div className="fixed top-6 right-6 z-50 flex gap-3">
          {/* Community */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition" />
            <div className="relative bg-black/80 backdrop-blur-xl rounded-lg px-6 py-2.5 border border-emerald-500/30 hover:border-emerald-500/60 transition">
              <Link href="https://discord.gg/zQrepqFyEy" target="_blank" className="select-none text-emerald-400 font-semibold tracking-wide uppercase text-sm">
                DISCORD
              </Link>
            </div>
          </div>

          {/* Preorder */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition animate-pulse-glow" />
            <div className="relative bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-lg px-6 py-2.5 border border-cyan-500/50 hover:border-cyan-500 transition">
              <Link href="#preorder" className="select-none text-cyan-300 font-bold tracking-wide uppercase text-sm">
                Preorder
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-4 md:px-6 md:py-24">
        <div className="pt-20 md:pt-0" />

        <div className="w-full max-w-[1800px] mx-auto">
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition animate-gradient" />
            
            {/* Video container with tech border */}
            <div className="relative tech-border corner-accent rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-emerald-500/20">
              <HeroVideo />
              
              
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="mt-8 text-center relative z-10">
          <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 tracking-wider animate-gradient">
            BETA TEST EARLY 2026
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="w-full px-4 md:px-20 py-20 md:py-32 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-16 md:gap-20">
          
          {/* Section Header */}
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500" />
              <h2 className="text-3xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                TECHNICAL FEATURES
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-emerald-500 to-transparent" />
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            <FeatureCard
              value="21"
              label="Fully actuated degree-of-freedom"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="~350 Gram"
              label="Hand weight without remote motors"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="Never"
              label="Overheating with remote actuation"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="15"
              label="Tactile sensors with 1mm spatial and 0.1N force resolution"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="2"
              label="Palm cameras with 140° FoV and controllable LED"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="21"
              label="Finger joint angle sensors"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="21"
              label="Tension sensing & self-tightening devices"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="Tendon Connectors"
              label="For rapid finger / motor replacement"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="SPI/I2C"
              label="Interfaces for in-hand sensors"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="TTL/CAN"
              label="Interfaces for standard motors"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="3D-printed Structure"
              label="For easy mechanical modifications"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="Arduino"
              label="For easy software modifications"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="Fully Open-source"
              label="CAD, assembly guide, electronics, and software"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

            <FeatureCard
              value="~$1,400"
              label="Material cost"
              gradient="from-emerald-500/10 to-cyan-500/10"
              borderColor="emerald-500/30"
            />

          </div>
        </div>
      </div>

      <EmailSubscribe />

    </main>
  );
}

interface FeatureCardProps {
  value: string;
  label: string;
  gradient: string;
  borderColor: string;
}

function FeatureCard({ value, label, gradient, borderColor }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className={`relative bg-black/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-${borderColor} hover:border-opacity-80 transition-all duration-300 h-full flex flex-col gap-3`}>
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-400/40 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 rounded-br-xl" />
        
        {/* Value */}
        <p className="text-3xl md:text-5xl font-black tracking-tight text-emerald-400">
          {value}
        </p>
        
        {/* Label */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {label}
        </p>
        

      </div>
    </div>
  );
}
