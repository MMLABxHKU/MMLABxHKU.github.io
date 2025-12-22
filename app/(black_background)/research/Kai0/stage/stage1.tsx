"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart";

import { stageData } from "./stage-data";

const chartConfig = {
  cumulative_value: {
    label: "Cumulative Value",
    color: "#4286F3",
  },
} satisfies ChartConfig;

export function StageVideo1() {
  const [activeTab, setActiveTab] = useState(stageData[0]?.title || "");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full flex flex-col items-center"
    >
      <TabsList className="w-full max-w-4xl justify-center flex-wrap gap-2 mt-6 bg-zinc-900/50 border border-zinc-800">
        {stageData.map((stage) => (
          <TabsTrigger 
            key={stage.title} 
            value={stage.title} 
            className="text-zinc-400 data-[state=active]:text-white data-[state=active]:bg-zinc-800"
          >
            {stage.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative w-full">
        {stageData.map((stage) => {
          const chartData = stage.evaluationData.map((item) => ({
            frame_idx: item.frame_idx,
            cumulative_value: item.cumulative_value,
            advantage: item.advantage as "Positive" | "Negative",
          }));

          return (
            <VideoWithChart 
              key={stage.title} 
              stage={stage} 
              chartData={chartData}
              isActive={activeTab === stage.title}
            />
          );
        })}
      </div>
    </Tabs>
  );
}

function VideoWithChart({ 
  stage, 
  chartData, 
  isActive 
}: { 
  stage: typeof stageData[0]; 
  chartData: Array<{ frame_idx: number; cumulative_value: number | null; advantage: "Positive" | "Negative" }>; 
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 使用 ref 来避免闭包问题（同步当前状态）
  const isActiveRef = useRef(isActive);
  const isDraggingRef = useRef(isDragging);
  isActiveRef.current = isActive;
  isDraggingRef.current = isDragging;
  const getActualDuration = () => {
    const video = videoRef.current;
    if (video && !Number.isNaN(video.duration) && video.duration > 0) {
      return video.duration;
    }
    return duration;
  };
  
  // 当 tab 激活/停用时，控制视频播放和同步状态
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      // Tab 变为不活动时，暂停视频（如果正在播放）
      if (!video.paused) {
        video.pause();
      }
      return;
    }

    let cancelled = false;
    let intervalId: number | undefined;

    const syncVideoState = () => {
      const v = videoRef.current;
      if (!v || cancelled) return false;

      const videoDuration = getActualDuration();
      const videoCurrentTime = v.currentTime || 0;
      const videoIsPlaying = !v.paused;
      
      if (videoDuration > 0) {
        setDuration(videoDuration);
        setCurrentTime(videoCurrentTime);
        setIsPlaying(videoIsPlaying);
        
        if (chartData.length > 0) {
          const progress = videoCurrentTime / videoDuration;
          const targetIndex = Math.floor(progress * (chartData.length - 1));
          setActiveIndex(targetIndex);
        }
        return true;
      }
      return false;
    };

    const stopPolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    // 如果视频已经加载，立即同步；否则定时尝试直到拿到 duration
    if (!syncVideoState()) {
      const handleLoadedMetadata = () => {
        if (syncVideoState()) {
          stopPolling();
        }
      };
      video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
      video.load();
      intervalId = window.setInterval(() => {
        if (syncVideoState()) {
          stopPolling();
        }
      }, 200);

      return () => {
        cancelled = true;
        stopPolling();
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }

    return () => {
      cancelled = true;
      stopPolling();
    };
  }, [isActive, chartData.length]);

  // 监听视频播放状态 - 不负责初始化
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // 使用 ref 来检查，避免闭包问题
      if (!isDraggingRef.current && isActiveRef.current) {
        setCurrentTime(video.currentTime);
        const actualDuration = getActualDuration();
        if (actualDuration > 0 && duration === 0) {
          setDuration(actualDuration);
        }
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };

    // 添加事件监听器
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [duration]);


  // 根据视频时间更新activeIndex - 使用 ref 避免过度渲染
  useEffect(() => {
    const actualDuration = getActualDuration();
    if (isActiveRef.current && actualDuration > 0 && !isDraggingRef.current && chartData.length > 0) {
      const progress = currentTime / actualDuration;
      const targetIndex = Math.floor(progress * (chartData.length - 1));
      setActiveIndex(targetIndex);
    }
  }, [currentTime, chartData.length]);

  // 计算tooltip X位置（只计算X，Y固定在底部）
  const getTooltipX = useCallback(() => {
    if (chartData.length === 0) return 0;
    const xPercent = chartData.length > 1 ? activeIndex / (chartData.length - 1) : 0.5;
    return xPercent * 100; // 返回百分比
  }, [activeIndex, chartData.length]);

  // 计算虚线Y位置
  const getLineY = useCallback(() => {
    if (!chartData[activeIndex]) return 0;
    const minValue = Math.min(...chartData.map(d => d.cumulative_value));
    const maxValue = Math.max(...chartData.map(d => d.cumulative_value));
    const currentValue = chartData[activeIndex].cumulative_value;
    const yPercent = maxValue > minValue ? (maxValue - currentValue) / (maxValue - minValue) : 0.5;
    return (yPercent + 0.01) * 100; // 返回百分比
  }, [activeIndex, chartData]);

  const updateProgressPosition = useCallback((clientX: number) => {
    if (!progressBarRef.current || chartData.length === 0) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const actualDuration = getActualDuration();
    
    // 更新图表选中
    const targetIndex = Math.floor(percentage * (chartData.length - 1));
    setActiveIndex(targetIndex);
    
    // 更新视频时间
    if (videoRef.current && actualDuration > 0) {
      const newTime = percentage * actualDuration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [chartData.length, duration]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    updateProgressPosition(e.clientX);
    
    const handleMouseMove = (e: MouseEvent) => {
      updateProgressPosition(e.clientX);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleChartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const actualDuration = getActualDuration();
    if (actualDuration > 0 && duration === 0) {
      setDuration(actualDuration);
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused);
    }
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    const targetIndex = Math.floor(percentage * (chartData.length - 1));
    setActiveIndex(targetIndex);
    
    if (actualDuration > 0) {
      const newTime = percentage * actualDuration;
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    const actualDuration = getActualDuration();
    if (actualDuration > 0 && duration === 0) {
      setDuration(actualDuration);
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused);
      
      if (chartData.length > 0) {
        const progress = video.currentTime / actualDuration;
        const targetIndex = Math.floor(progress * (chartData.length - 1));
        setActiveIndex(targetIndex);
      }
    }
    
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const actualDuration = getActualDuration();
  const progress = actualDuration > 0 ? (currentTime / actualDuration) * 100 : 0;
  const currentValue = chartData[activeIndex]?.cumulative_value ?? 0;
  const currentAdvantage = chartData[activeIndex]?.advantage;
  const borderColor = currentAdvantage === "Positive" ? "#22c55e" : "#ef4444"; // green-500 / red-500 from theme palette
  const tooltipX = getTooltipX();
  const lineY = getLineY();

  return (
    <div
      aria-hidden={!isActive}
      className={`w-full flex justify-center ${isActive ? "relative z-10" : "absolute inset-0 opacity-0 pointer-events-none z-0"}`}
    >
      <div className="relative flex flex-col items-center px-6 w-full">
        <div
          ref={videoContainerRef}
          className="relative w-full max-w-4xl border-[10px] border-solid rounded-sm"
          style={{ borderColor }}
        >
          <video
            ref={videoRef}
            autoPlay={false}
            muted
            loop
            controls={false}
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover object-center rounded-sm bg-gradient-loading select-none block"
          >
            <source src={stage.video} type="video/mp4" />
          </video>
          
          {/* 播放/暂停按钮 */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* 图表覆盖层 - 使用绝对定位自动匹配视频尺寸 */}
          <div 
            className="absolute inset-0 pointer-events-auto rounded-sm overflow-visible cursor-pointer"
            onClick={handleChartClick}
          >
            <ChartContainer 
              key={`${stage.title}-container`}
              config={chartConfig} 
              className="h-full w-full [&_.recharts-surface]:outline-none [&_.recharts-cartesian-axis]:opacity-0"
            >
              <ResponsiveContainer key={`${stage.title}-responsive`} width="100%" height="100%">
                <LineChart
                  key={`${stage.title}-linechart`}
                  data={chartData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="frame_idx"
                    tickLine={false}
                    axisLine={false}
                    tick={false}
                    domain={['dataMin', 'dataMax']}
                    width={0}
                    height={0}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={false}
                    domain={['dataMin', 'dataMax']}
                    width={0}
                    height={0}
                  />
                  <ChartTooltip
                    cursor={{ stroke: '#ef4444', strokeDasharray: '5 5', strokeWidth: 1 }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const value = payload[0].value;
                        const displayValue = typeof value === 'number' ? value.toFixed(2) : String(value);
                        return (
                          <div className="bg-red-500/90 text-white px-2 py-1 rounded text-xs">
                            {displayValue}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cumulative_value"
                    stroke="#4286F3"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: '#4286F3', stroke: '#fff', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            {/* 自定义白色虚线 - 从数据点到底部 */}
            {chartData[activeIndex] && (
              <>
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${tooltipX}%`,
                    top: `${lineY}%`,
                    bottom: 0,
                    width: '2px',
                    background: 'repeating-linear-gradient(to bottom, white 0, white 5px, transparent 5px, transparent 10px)'
                  }}
                />
                
                {/* Tooltip - 固定在底部 */}
                {chartData[activeIndex]?.cumulative_value !== undefined && chartData[activeIndex]?.cumulative_value !== null && (
                  <div
                    className="absolute pointer-events-none z-20"
                    style={{
                      left: `${tooltipX}%`,
                      bottom: '4px',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="bg-red-500/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {chartData[activeIndex].cumulative_value.toFixed(2)}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* 进度条 */}
        <div className="w-full max-w-4xl mt-4">
          <div
            ref={progressBarRef}
            className="relative h-2 bg-muted rounded-full cursor-pointer group"
            onMouseDown={handleMouseDown}
          >
            <div
              className="absolute h-full bg-[#4286F3] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute h-4 w-4 bg-[#4286F3] rounded-full -top-1 transition-all group-hover:scale-125"
              style={{ left: `calc(${progress}% - 8px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
