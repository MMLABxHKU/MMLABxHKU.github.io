'use client';

import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

import './lineVideo.scss';

let timeSet: any = null;
export default function LineVideo({ data, height }: { data: Array<any>; height: string | number }) {
  const echartsRef: any = useRef(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (timeSet) clearTimeout(timeSet);

    timeSet = setTimeout(() => {
      if (echartsRef.current) {
        echartsRef.current?.clear?.();
      } else {
        echartsRef.current = echarts.init(document.getElementById('echarts'));
      }

      echartsRef.current?.setOption({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          formatter: () => {
            return;
          },
          axisPointer: {
            type: 'line',
            lineStyle: { width: 3, color: '#fff', type: 'dashed' },
          },
        },
        grid: { left: '50px', right: '50px', top: '20px', bottom: '100px' },
        xAxis: { show: false, type: 'category', data: data.map((item: any) => item.frame_idx) },
        yAxis: { show: false, type: 'value' },
        series: {
          type: 'line',
          smooth: true,
          showSymbol: false,
          itemStyle: { color: '#fff' },
          data: data.map((item: any) => item.absolute_value),
        },
      });
    }, 500);

    return () => {
      if (timeSet) clearTimeout(timeSet);
    };
  }, []);

  // 开始拖动
  const [startX, setStartX] = useState({ start: 0, max: 0 }); // 存储按钮初始位置和最大可移动距离
  useEffect(() => {
    const rect: any = document.getElementById('draggable')?.getBoundingClientRect();
    // console.log(rect, '++++++rect');
    const start = rect.left + rect.width / 2;

    const rectDiv: any = document.getElementById('draggableDiv')?.getBoundingClientRect();
    // console.log(rectDiv, '++++++rectDiv');
    const max = rectDiv.width - rect.width;

    setStartX({ start, max });
  }, []);

  const [isDragging, setIsDragging] = useState(false); // 标记是否正在拖动
  const [position, setPosition] = useState(0);

  // 鼠标移动事件处理函数
  const handleMouseMove = (event: any) => {
    if (!isDragging) return;

    const num = event.clientX - startX.start; // 计算移动的距离
    // console.log(num, '++++++handleMouseMove num');

    // 更新位置
    if (num >= 0 && num <= startX.max) {
      setPosition(num);
      setActive(Math.floor((num / startX.max) * (data.length - 1)));
    }

    if (num < 0) {
      setPosition(0);
      setActive(0);
    }

    if (num > startX.max) {
      setPosition(startX.max);
      setActive(data.length - 1);
    }
  };

  // 鼠标释放事件处理函数
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 使用useEffect添加事件监听器
  useEffect(() => {
    const handleMouseMoveOutside = (event: any) => {
      if (isDragging) handleMouseMove(event);
    };

    window.addEventListener('mousemove', handleMouseMoveOutside);
    window.addEventListener('mouseup', handleMouseUp);

    // 清理函数，移除事件监听器
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveOutside);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]); // 只在isDragging改变时添加或移除监听器

  // 视频播放控制
  const videoRef: any = useRef(null);

  // 滑动时
  useEffect(() => {
    if (active < 0) return;

    echartsRef.current?.dispatchAction?.({ type: 'showTip', seriesIndex: 0, dataIndex: active });

    if (videoRef.current.duration) {
      const time = Math.floor((active / (data.length - 1)) * videoRef.current.duration);
      videoRef.current.currentTime = time; // 跳转到指定时间（秒）
      // videoRef.current.play(); // 播放视频
    }
  }, [active]);

  return (
    <div className="LineVideo flex" style={{ width: '100%', height, overflow: 'hidden' }}>
      <div className="leftDiv">
        <div className="one">数据源一</div>
        <div className="one">数据源二</div>
        <div className="one">数据源三</div>
        <div className="one">数据源四</div>
        <div className="one">数据源五</div>
      </div>

      <div className="rightDiv">
        <video
          ref={videoRef}
          className="video"
          src="https://test2.h5.org.cn/20251217/value_folding_3.mp4"
          style={{ height }}
        ></video>

        <div className="divDiv">
          <div className="echartsDiv">
            <div className="echarts" id="echarts"></div>

            <div className="tipDiv">
              <div
                className="tip"
                style={{ left: `${position}px` }}
                title={data?.[active]?.absolute_advantage?.toString()}
              >
                {data?.[active]?.absolute_advantage}
              </div>
              <div
                className="num"
                style={{ left: `${position}px` }}
                title={data?.[active]?.absolute_value?.toString()}
              >
                {data?.[active]?.absolute_value}
              </div>

              <div className="btnDiv">
                <div id="draggableDiv" className="btnDivBor">
                  <div
                    className="btn"
                    id="draggable"
                    style={{ marginLeft: `${position}px` }}
                    onMouseDown={() => setIsDragging(true)}
                  >
                    滑块
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
