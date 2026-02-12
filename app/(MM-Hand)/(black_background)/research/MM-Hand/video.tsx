"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

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

    // 监听视频播放进度
    const handleTimeUpdate = () => {
      if (!video) return;
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      observer?.disconnect();
      video?.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener("scroll", unlockPlayback);
      window.removeEventListener("touchstart", unlockPlayback);
      window.removeEventListener("click", unlockPlayback);
    };
  }, [canPlay]);

  // 切换静音状态
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // 进度条点击跳转
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  };

  // 触摸事件处理（手机端）
  const handleProgressTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    setIsTouching(true);
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, touchX / rect.width));
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
      
      {/* Scan line effect over video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-scan-vertical" />
      </div>

      {/* 控制栏 - 桌面端悬停显示，移动端始终显示 */}
      <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
        isHovering ? 'opacity-100 translate-y-0' : 'md:opacity-0 md:translate-y-2 opacity-100 translate-y-0'
      }`}>
        <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-8">
          {/* 进度条 */}
          <div 
            className="relative w-full h-1 md:h-1 py-3 -my-3 cursor-pointer mb-3 group/progress"
            onClick={handleProgressClick}
            onTouchStart={handleProgressTouch}
            onTouchMove={handleProgressTouch}
            onTouchEnd={handleTouchEnd}
          >
            {/* 进度条背景轨道 */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 md:h-1 bg-white/10 rounded-full" />
            
            {/* 已播放进度 */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 md:h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
            
            {/* 进度指示器 - 手机端更大，触摸时显示 */}
            <div 
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 md:w-3 md:h-3 bg-white rounded-full shadow-lg transition-opacity ${
                isTouching ? 'opacity-100' : 'opacity-0 group-hover/progress:opacity-100'
              }`}
              style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
            />
          </div>

          {/* 控制按钮区域 */}
          <div className="flex items-center justify-between">
            {/* 状态指示 */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>

            {/* 音量控制按钮 */}
            <button
              onClick={toggleMute}
              className="group/btn relative flex items-center gap-2 px-3 py-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-lg border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
              <span className="text-xs text-gray-400 group-hover/btn:text-emerald-400 transition-colors uppercase tracking-wider">
                {isMuted ? 'Muted' : 'Audio'}
              </span>
            </button>
          </div>
        </div>
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
