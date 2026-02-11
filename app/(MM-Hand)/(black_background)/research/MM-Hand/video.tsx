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
    <div className="relative w-full aspect-video">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://ik.imagekit.io/opendrivelab/title_video1_frame0.jpg"
      >
        <source
          src="https://assets.kinetixai.cn/rise/orz.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
