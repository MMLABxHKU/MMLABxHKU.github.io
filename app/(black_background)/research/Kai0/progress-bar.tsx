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

      if (methodologyEl && citationEl) {
        const methodologyRect = methodologyEl.getBoundingClientRect();
        const citationRect = citationEl.getBoundingClientRect();

        // Show progress bar when methodology section is near top of viewport
        const shouldShow = methodologyRect.top < 150 && citationRect.top > 200;
        setIsVisible(shouldShow);

        if (shouldShow) {
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
        }
      }

      // Always continue animation loop
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    // Start the animation loop after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(updateProgress);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {/* Outer container with Apple-style layered shadows */}
      <div 
        className="w-full max-w-xl mx-4 mt-3 rounded-[18px] p-[1px]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
          boxShadow: `
            0 0 0 0.5px rgba(255,255,255,0.1),
            0 2px 4px rgba(0,0,0,0.3),
            0 8px 16px rgba(0,0,0,0.3),
            0 16px 32px rgba(0,0,0,0.2)
          `
        }}
      >
        {/* Inner content with Apple's signature material */}
        <div 
          className="rounded-[17px] px-5 py-3.5"
          style={{
            background: "linear-gradient(180deg, rgba(44,44,46,0.98) 0%, rgba(28,28,30,0.99) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)"
          }}
        >
          {/* Stage indicator - Apple-style minimal typography */}
          <div className="flex justify-between items-center mb-2.5">
            <span 
              className="text-[11px] font-medium tracking-wide"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              STAGE {currentStage.number} OF 3
            </span>
            <span 
              className="text-[11px] font-semibold tracking-tight"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {currentStage.name}
            </span>
          </div>

          {/* Progress track - Apple-style pill */}
          <div className="relative flex items-center gap-2.5">
            {/* 0% label */}
            <span 
              className="text-[11px] font-semibold w-8 text-left tabular-nums"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              0%
            </span>

            {/* Track container with inner shadow */}
            <div 
              className="flex-1 relative h-[6px] rounded-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)"
              }}
            >
              {/* Progress fill with Apple-style gradient */}
              <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ 
                  width: "0%",
                  background: "linear-gradient(90deg, #FF375F 0%, #FF6B6B 50%, #FF9F43 100%)",
                  boxShadow: "0 0 8px rgba(255,55,95,0.4)",
                  willChange: "width",
                  transform: "translateZ(0)"
                }}
              />

              {/* Subtle stage markers */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
                {stages.map((stage, index) => {
                  const markerPosition = ((index + 1) / stages.length) * 100;
                  const isCurrent = currentStage.number === stage.number;

                  return (
                    <div
                      key={stage.id}
                      className="absolute w-1.5 h-1.5 rounded-full transform -translate-x-1/2 transition-all duration-300"
                      style={{ 
                        left: `${markerPosition}%`,
                        background: isCurrent 
                          ? "rgba(255,255,255,0.9)" 
                          : "rgba(255,255,255,0.25)",
                        boxShadow: isCurrent 
                          ? "0 0 6px rgba(255,255,255,0.5)" 
                          : "none"
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* 100% label */}
            <span 
              className="text-[11px] font-semibold w-8 text-right tabular-nums"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
