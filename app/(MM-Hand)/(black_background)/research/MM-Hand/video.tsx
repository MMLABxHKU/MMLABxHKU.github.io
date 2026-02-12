"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let observer: IntersectionObserver;

    // 尝试自动播放（用于允许 autoplay 的浏览器）
    const tryAutoPlay = async () => {
      try {
        await video.play();
        setCanPlay(true);
      } catch {
        // autoplay 被拦截
        setCanPlay(false);
      }
    };

    tryAutoPlay();

    // 用户交互后解锁播放
    const unlockPlayback = async () => {
      if (!video) return;
      try {
        await video.play();
        setCanPlay(true);
      } catch {}
      window.removeEventListener("scroll", unlockPlayback);
      window.removeEventListener("touchstart", unlockPlayback);
      window.removeEventListener("click", unlockPlayback);
    };

    window.addEventListener("scroll", unlockPlayback, { once: true });
    window.addEventListener("touchstart", unlockPlayback, { once: true });
    window.addEventListener("click", unlockPlayback, { once: true });

    // 视口控制播放暂停
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;

          if (entry.isIntersecting && canPlay) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", unlockPlayback);
      window.removeEventListener("touchstart", unlockPlayback);
      window.removeEventListener("click", unlockPlayback);
    };
  }, [canPlay]);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://assets.kinetixai.cn/rise/104934.jpg"
      >
        <source
          src="https://assets.kinetixai.cn/rise/mm-hand.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />


      {/* HUD-style corner markers */}
      <div className="absolute top-4 left-4 flex gap-1">
        <div className="w-1 h-4 bg-emerald-400 animate-pulse" />
        <div className="w-4 h-1 bg-emerald-400 animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>
      

      

      
      <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-4 h-1 bg-emerald-400 animate-pulse" style={{animationDelay: '0.3s'}} />
        <div className="w-1 h-4 bg-emerald-400 animate-pulse" style={{animationDelay: '0.8s'}} />
      </div>



      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: 0%; opacity: 0; }
          25% { opacity: 1; }
          50% { opacity: 1; }
          75% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scan-vertical 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
