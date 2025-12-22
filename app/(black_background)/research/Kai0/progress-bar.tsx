"use client";

import { useState, useEffect, useRef } from "react";

interface StageInfo {
  id: string;
  name: string;
  number: number;
}

const stages: StageInfo[] = [
  { id: "mode_consistency", name: "Mode Consistency", number: 1 },
  { id: "model_arithmetic", name: "Model Arithmetic", number: 2 },
  { id: "stage_advantage", name: "Stage Advantage", number: 3 },
];

export function ProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStage, setCurrentStage] = useState<StageInfo>(stages[0]);
  const progressRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const methodologyEl = document.getElementById("methodology");
      const citationEl = document.getElementById("citation");

      if (!methodologyEl || !citationEl) return;

      const methodologyRect = methodologyEl.getBoundingClientRect();
      const citationRect = citationEl.getBoundingClientRect();

      // Show progress bar when methodology section is near top of viewport
      const shouldShow = methodologyRect.top < 150 && citationRect.top > 200;
      setIsVisible(shouldShow);

      if (!shouldShow) return;

      // Calculate overall progress from methodology to citation
      const startY = methodologyEl.offsetTop;
      const endY = citationEl.offsetTop;
      const currentScroll = window.scrollY + 150;

      const totalDistance = endY - startY;
      const scrolledDistance = currentScroll - startY;
      const rawProgress = Math.max(0, Math.min(100, (scrolledDistance / totalDistance) * 100));

      // Smooth interpolation for ultra-smooth feel
      const smoothingFactor = 0.15;
      const smoothedProgress = lastProgressRef.current + (rawProgress - lastProgressRef.current) * smoothingFactor;
      lastProgressRef.current = smoothedProgress;

      // Direct DOM manipulation for maximum smoothness
      if (progressRef.current) {
        progressRef.current.style.width = `${smoothedProgress}%`;
      }

      // Determine current stage
      const viewportMiddle = window.scrollY + window.innerHeight * 0.3;

      for (let i = stages.length - 1; i >= 0; i--) {
        const stageEl = document.getElementById(stages[i].id);
        if (stageEl && stageEl.offsetTop <= viewportMiddle) {
          setCurrentStage(stages[i]);
          break;
        }
      }

      // Continue animation loop
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-opacity duration-300 ${
        isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ willChange: "opacity" }}
    >
      <div className="w-full max-w-2xl mx-4 mt-4 px-6 py-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
        {/* Stage indicator */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-white/60 font-medium tracking-wider uppercase">
            Stage {currentStage.number} of 3
          </span>
          <span className="text-xs text-white/90 font-semibold">
            {currentStage.name}
          </span>
        </div>

        {/* Progress track */}
        <div className="relative flex items-center gap-3">
          {/* 0% label */}
          <span className="text-sm font-bold text-white/70 w-10 text-left">
            0%
          </span>

          {/* Track container */}
          <div className="flex-1 relative h-2 bg-white/10 rounded-full overflow-hidden">
            {/* Progress fill - no CSS transition, using RAF for smoothness */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-mred via-red-400 to-orange-400 rounded-full"
              style={{ 
                width: "0%",
                willChange: "width",
                transform: "translateZ(0)" // Force GPU acceleration
              }}
            />

            {/* Stage markers */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
              {stages.map((stage, index) => {
                const markerPosition = ((index + 1) / stages.length) * 100;
                const isCurrent = currentStage.number === stage.number;

                return (
                  <div
                    key={stage.id}
                    className={`absolute w-3 h-3 rounded-full border-2 transform -translate-x-1/2 transition-transform duration-200 ${
                      isCurrent
                        ? "bg-mred border-mred scale-125"
                        : "bg-white/20 border-white/30 scale-100"
                    }`}
                    style={{ left: `${markerPosition}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* 100% label */}
          <span className="text-sm font-bold text-white/70 w-10 text-right">
            100%
          </span>
        </div>

        {/* Stage names below track */}
        <div className="relative mt-2 flex items-center gap-3">
          <div className="w-10" />
          <div className="flex-1 relative">
            {stages.map((stage, index) => {
              const markerPosition = ((index + 1) / stages.length) * 100;
              const isCurrent = currentStage.number === stage.number;

              return (
                <span
                  key={stage.id}
                  className={`absolute text-[10px] transform -translate-x-1/2 whitespace-nowrap transition-colors duration-200 ${
                    isCurrent ? "text-white/90 font-medium" : "text-white/40"
                  }`}
                  style={{ left: `${markerPosition}%` }}
                >
                  {stage.number}
                </span>
              );
            })}
          </div>
          <div className="w-10" />
        </div>
      </div>
    </div>
  );
}
