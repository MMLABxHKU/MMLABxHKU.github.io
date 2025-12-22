"use client";

import { useState, useEffect, useCallback } from "react";

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
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState<StageInfo>(stages[0]);

  const calculateProgress = useCallback(() => {
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
    const currentScroll = window.scrollY + 150; // offset for better UX

    const totalDistance = endY - startY;
    const scrolledDistance = currentScroll - startY;
    const rawProgress = Math.max(0, Math.min(1, scrolledDistance / totalDistance));
    setProgress(rawProgress * 100);

    // Determine current stage
    const viewportMiddle = window.scrollY + window.innerHeight * 0.3;

    for (let i = stages.length - 1; i >= 0; i--) {
      const stageEl = document.getElementById(stages[i].id);
      if (stageEl && stageEl.offsetTop <= viewportMiddle) {
        setCurrentStage(stages[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    // Initial calculation
    calculateProgress();

    // Add scroll listener
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [calculateProgress]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
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
            {/* Progress fill */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-mred via-red-400 to-orange-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />

            {/* Stage markers */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
              {stages.map((stage, index) => {
                const markerPosition = ((index + 1) / stages.length) * 100;
                const isCompleted = progress >= markerPosition;
                const isCurrent = currentStage.number === stage.number;

                return (
                  <div
                    key={stage.id}
                    className={`absolute w-3 h-3 rounded-full border-2 transition-all duration-300 transform -translate-x-1/2 ${
                      isCompleted
                        ? "bg-white border-white scale-100"
                        : isCurrent
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
          <div className="w-10" /> {/* Spacer for 0% label */}
          <div className="flex-1 relative">
            {stages.map((stage, index) => {
              const markerPosition = ((index + 1) / stages.length) * 100;
              const isCurrent = currentStage.number === stage.number;

              return (
                <span
                  key={stage.id}
                  className={`absolute text-[10px] transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                    isCurrent ? "text-white/90 font-medium" : "text-white/40"
                  }`}
                  style={{ left: `${markerPosition}%` }}
                >
                  {stage.number}
                </span>
              );
            })}
          </div>
          <div className="w-10" /> {/* Spacer for 100% label */}
        </div>
      </div>
    </div>
  );
}

