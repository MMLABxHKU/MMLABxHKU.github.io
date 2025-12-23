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
  const percentRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef(0);
  const lastDisplayedProgress = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const methodologyEl = document.getElementById("methodology");
      const citationEl = document.getElementById("citation");

      if (methodologyEl && citationEl) {
        const methodologyRect = methodologyEl.getBoundingClientRect();
        const citationRect = citationEl.getBoundingClientRect();

        const shouldShow = methodologyRect.top < 150 && citationRect.top > 200;
        setIsVisible(shouldShow);

        if (shouldShow) {
          const startY = methodologyEl.offsetTop;
          const endY = citationEl.offsetTop;
          const currentScroll = window.scrollY + 150;

          const totalDistance = endY - startY;
          const scrolledDistance = currentScroll - startY;
          const rawProgress = Math.max(0, Math.min(100, (scrolledDistance / totalDistance) * 100));

          // Ultra-smooth interpolation
          const smoothingFactor = 0.12;
          const smoothedProgress = lastProgressRef.current + (rawProgress - lastProgressRef.current) * smoothingFactor;
          lastProgressRef.current = smoothedProgress;

          // Direct DOM manipulation for maximum smoothness - no React re-renders
          if (progressRef.current) {
            progressRef.current.style.width = `${smoothedProgress}%`;
          }

          // Update percentage text directly (only when value changes)
          const displayProgress = Math.round(smoothedProgress);
          if (percentRef.current && displayProgress !== lastDisplayedProgress.current) {
            percentRef.current.textContent = `${displayProgress}%`;
            lastDisplayedProgress.current = displayProgress;
          }

          // Determine current stage (throttled check)
          const viewportMiddle = window.scrollY + window.innerHeight * 0.3;

          for (let i = stages.length - 1; i >= 0; i--) {
            const stageEl = document.getElementById(stages[i].id);
            if (stageEl && stageEl.offsetTop <= viewportMiddle) {
              if (currentStage.number !== stages[i].number) {
                setCurrentStage(stages[i]);
              }
              break;
            }
          }
        }
      }

      // Continue animation loop
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    // Start the animation loop after DOM is ready
    const timeoutId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(updateProgress);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentStage.number]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Outer container with Apple-style layered shadows */}
      <div 
        className="w-full max-w-xl mx-4 mt-3 rounded-[18px] p-[1px]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
          boxShadow: `
            0 0 0 0.5px rgba(255,255,255,0.08),
            0 2px 4px rgba(0,0,0,0.3),
            0 8px 16px rgba(0,0,0,0.3),
            0 16px 32px rgba(0,0,0,0.2)
          `
        }}
      >
        {/* Inner content */}
        <div 
          className="rounded-[17px] px-5 py-3.5"
          style={{
            background: "linear-gradient(180deg, rgba(44,44,46,0.98) 0%, rgba(28,28,30,0.99) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)"
          }}
        >
          {/* Top row: Mastery indicator */}
          <div className="flex justify-between items-center mb-2.5">
            {/* Left: Mastery unlocked */}
            <div className="flex items-center gap-1.5">
              <span 
                ref={percentRef}
                className="text-[13px] font-bold tabular-nums"
                style={{ 
                  background: "linear-gradient(90deg, #FF375F 0%, #FF6B6B 50%, #FF9F43 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: "36px"
                }}
              >
                0%
              </span>
              <span 
                className="text-[12px] font-medium"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                mastery unlocked by
              </span>
            </div>

            {/* Right: Current stage */}
            <span 
              className="text-[11px] font-medium transition-opacity duration-200"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {currentStage.name}
            </span>
          </div>

          {/* Progress track */}
          <div 
            className="relative h-[5px] rounded-full overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)"
            }}
          >
            {/* Progress fill - GPU accelerated */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ 
                width: "0%",
                background: "linear-gradient(90deg, #FF375F 0%, #FF6B6B 50%, #FF9F43 100%)",
                boxShadow: "0 0 10px rgba(255,55,95,0.4)",
                willChange: "width",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden"
              }}
            />

            {/* Stage markers */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
              {stages.map((stage, index) => {
                const markerPosition = ((index + 1) / stages.length) * 100;

                return (
                  <div
                    key={stage.id}
                    className="absolute w-1 h-1 rounded-full transform -translate-x-1/2"
                    style={{ 
                      left: `${markerPosition}%`,
                      background: "rgba(255,255,255,0.3)"
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
