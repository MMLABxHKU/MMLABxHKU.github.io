"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Label } from "recharts";
import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart";

import { stageData } from "./stage-data";

const chartConfig = {
  relative_advantage: {
    label: "Relative Advantage",
    color: "#4286F3",
  },
} satisfies ChartConfig;

export function StageVideo1() {
  return (
    <Tabs
      defaultValue={stageData[0]?.title}
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

      {stageData.map((stage) => {
        const chartData = stage.evaluationData1.map((item) => ({
          frame_idx: item.frame_idx,
          relative_advantage: item.relative_advantage,
        }));

        return (
          <VideoWithChart key={stage.video} stage={stage} chartData={chartData} />
        );
      })}
    </Tabs>
  );
}

function VideoWithChart({ stage, chartData }: { stage: typeof stageData[0], chartData: Array<{ frame_idx: number; relative_advantage: number }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        const rect = video.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        updateDimensions();
        setDuration(videoRef.current.duration || 0);
      }
    };

    const handleTimeUpdate = () => {
      if (videoRef.current && !isDragging) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', updateDimensions);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
    }

    updateDimensions();
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (videoRef.current) {
      resizeObserver.observe(videoRef.current);
    }
    
    window.addEventListener('resize', updateDimensions);

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', updateDimensions);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isDragging]);

  // 根据视频时间更新activeIndex
  useEffect(() => {
    if (duration > 0 && !isDragging) {
      const progress = currentTime / duration;
      const targetIndex = Math.floor(progress * (chartData.length - 1));
      setActiveIndex(targetIndex);
    }
  }, [currentTime, duration, chartData.length, isDragging]);

  // 计算tooltip和虚线位置
  useEffect(() => {
    if (activeIndex !== undefined && chartData[activeIndex] && chartContainerRef.current) {
      const container = chartContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      
      // 计算数据点在图表中的位置
      const dataLength = chartData.length;
      const minValue = Math.min(...chartData.map(d => d.relative_advantage));
      const maxValue = Math.max(...chartData.map(d => d.relative_advantage));
      
      // X位置：根据activeIndex在数据数组中的位置
      const xPercent = dataLength > 1 ? activeIndex / (dataLength - 1) : 0.5;
      const xPos = containerRect.width * xPercent;
      
      // Y位置：根据relative_advantage的值
      const currentValue = chartData[activeIndex].relative_advantage;
      const yPercent = maxValue > minValue ? (maxValue - currentValue) / (maxValue - minValue) : 0.5;
      const yPos = containerRect.height * yPercent;
      
      setTooltipPosition({ x: xPos, y: yPos });
    } else {
      setTooltipPosition(null);
    }
  }, [activeIndex, chartData]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current || chartData.length === 0 || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    // 更新视频时间
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    
    // 更新图表选中
    const targetIndex = Math.floor(percentage * (chartData.length - 1));
    setActiveIndex(targetIndex);
  };

  const handleProgressDrag = useCallback((e: MouseEvent) => {
    if (!progressBarRef.current || !videoRef.current || chartData.length === 0 || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    // 更新视频时间
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    
    // 更新图表选中
    const targetIndex = Math.floor(percentage * (chartData.length - 1));
    setActiveIndex(targetIndex);
  }, [chartData.length, duration]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressClick(e);
    
    const handleMouseMove = (e: MouseEvent) => {
      handleProgressDrag(e);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  // 处理图表点击事件
  const handleChartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!chartContainerRef.current || !videoRef.current || chartData.length === 0 || !duration) return;
    
    const rect = chartContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    // 更新图表选中
    const targetIndex = Math.floor(percentage * (chartData.length - 1));
    setActiveIndex(targetIndex);
    
    // 更新视频时间
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <TabsContent
      value={stage.title}
      className="w-full flex justify-center"
    >
      <div className="relative flex flex-col items-center px-6 w-full">
        <div ref={containerRef} className="relative w-full max-w-4xl">
          <video
            ref={videoRef}
            autoPlay={false}
            muted
            loop
            controls={false}
            playsInline
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

          {dimensions.width > 0 && dimensions.height > 0 && (
            <div 
              ref={chartContainerRef}
              className="absolute pointer-events-auto rounded-sm overflow-visible cursor-pointer"
              style={{ 
                top: 0,
                left: 0,
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`
              }}
              onClick={handleChartClick}
            >
              <ChartContainer 
                config={chartConfig} 
                className="h-full w-full [&_.recharts-surface]:outline-none [&_.recharts-cartesian-axis]:opacity-0 [&_.recharts-wrapper]:!w-full [&_.recharts-wrapper]:!h-full [&_.recharts-surface]:!w-full [&_.recharts-surface]:!h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
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
                          dataKey="relative_advantage"
                          stroke="#4286F3"
                          strokeWidth={2.5}
                          dot={false}
                          activeDot={{ r: 5, fill: '#4286F3', stroke: '#fff', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  
                  {/* 自定义虚线 - 从底部到数据点 */}
                  {tooltipPosition && activeIndex !== undefined && dimensions.height > 0 && (
                    <svg
                      className="absolute pointer-events-none z-10"
                      style={{
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <line
                        x1={tooltipPosition.x}
                        y1={tooltipPosition.y}
                        x2={tooltipPosition.x}
                        y2={dimensions.height}
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                      />
                    </svg>
                  )}
                  
                  {/* 自定义tooltip - 滑块控制时显示，底部对齐视频底部 */}
                  {tooltipPosition && activeIndex !== undefined && chartData[activeIndex] && dimensions.height > 0 && (
                    <div
                      className="absolute pointer-events-none z-20"
                      style={{
                        left: `${tooltipPosition.x}px`,
                        bottom: '0px',
                        transform: 'translate(-50%, 0)'
                      }}
                    >
                      <div className="bg-red-500/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                        {chartData[activeIndex].relative_advantage.toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>
              )}
        </div>
        {/* Progress Bar */}
        <div className="w-full max-w-4xl mt-4">
          <div
            ref={progressBarRef}
            className="relative h-2 bg-muted rounded-full cursor-pointer group"
            onClick={handleProgressClick}
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
    </TabsContent>
  );
}
