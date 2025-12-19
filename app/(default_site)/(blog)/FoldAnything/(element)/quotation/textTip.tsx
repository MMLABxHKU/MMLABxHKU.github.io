'use client';

import { useEffect, useRef, useState } from 'react';

// import './textTip.scss';

let timeSet: any = null;
export default function textTip({ html, tipList }: { html: string; tipList: any }) {
  const [htmlNow, setHtmlNow] = useState('');
  const [tipListNow, setTipListNow] = useState<any>({});

  useEffect(() => {
    if (!html) return;

    Object.keys(tipList).map(num => {
      html = html.replace(
        `<sup class="footnote-ref" data-footnote="${num}">${num}</sup>`,
        `<sup class="footnote-ref" data-footnote="${num}" id="id${num}">${num}</sup>`
      );
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
    <div className="TextTip flex">
      <div className="htmlDiv" id="htmlDiv" dangerouslySetInnerHTML={{ __html: htmlNow }} />

      <div className="tipDiv">
        {Object.keys(tipListNow).map(num => (
          <div
            className="tip"
            id={`tip${num}`}
            style={{ margin: `${tipListNow[num].top}px 0 0 0` }}
            key={num}
          >
            <a href={tipListNow[num].link} target="_blank">
              <sup className="sup">{num}</sup>
              {tipListNow[num].content}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
