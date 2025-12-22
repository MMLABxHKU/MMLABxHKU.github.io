'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link"


let timeSet: any = null;
export default function TextTip({
  html,
  tipList,
  offset = 0,
}: {
  html: string;
  tipList: Record<number, any>;
  offset?: number;
}) {
  const [htmlNow, setHtmlNow] = useState('');
  const [tipListNow, setTipListNow] = useState<any>({});

  useEffect(() => {
    if (!html) return;

    Object.keys(tipList).map(num => {
      html = html.replace(`<sup>${num}</sup>`, `<sup id="id${num}">${Number(num) + offset}</sup>`);
    });
    setHtmlNow(html);
    setTipListNow(tipList);

    if (timeSet) clearTimeout(timeSet);
    timeSet = setTimeout(() => {
      const tipListNew = JSON.parse(JSON.stringify(tipList));
      const rectDiv: any = document.getElementById(`htmlDiv`)?.getBoundingClientRect();
      // console.log(rectDiv, '++++++rectDiv');

      let arr: any = []; // 存储上一个节点距离顶部的高度及自身高度的和的集合
      Object.keys(tipListNew).map(num => {
        const rect: any = document.getElementById(`id${num}`)?.getBoundingClientRect();
        // console.log(rect, '++++++rect');

        const arrNew = JSON.parse(JSON.stringify(arr));
        const before = arrNew.pop() || 0;
        let top = Math.floor(rect.top) - Math.floor(rectDiv.top) - Math.floor(before);
        if (before) {
          top = top > 0 ? top : 20;
        } else {
          top = top > 0 ? top : 0;
        }
        tipListNew[num].top = top;

        const rectTip: any = document.getElementById(`tip${num}`)?.getBoundingClientRect();
        // console.log(rectTip, '++++++rectTip');
        arr.push(Math.floor(rect.top) - Math.floor(rectDiv.top) + Math.floor(rectTip.height));
        // console.log(arr, '++++++arr');
      });

      setTipListNow(tipListNew);
    }, 500);

    return () => {
      if (timeSet) clearTimeout(timeSet);
    };
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div className="flex flex-row gap-6 justify-center">



        <div className='hidden xl:block flex-1/12 pl-6'></div>



        <div className="flex flex-10/12 overflow-hidden px-6 xl:px-2" id="htmlDiv" dangerouslySetInnerHTML={{ __html: htmlNow }} />


        
        <div className="hidden xl:block flex-1/12 pr-6 overflow-hidden text-xs">
          {Object.keys(tipListNow).map(num => (
            <div
              className="overflow-hidden"
              id={`tip${num}`}
              style={{ margin: `${tipListNow[num].top}px 0 0 0` }}
              key={num}
            >
              {tipListNow[num].link ? (
                <Link className="animated-underline" href={tipListNow[num].link} target="_blank"><sup className="overflow-hidden">{Number(num) + offset}</sup>{tipListNow[num].content}</Link>
              ) : (
                <>
                  <sup className="overflow-hidden">{num}</sup>
                  {tipListNow[num].content}
                </>
              )}
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}
