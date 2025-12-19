'use client';

import { useEffect, useRef, useState } from 'react';

import './lineNum.scss';

export default function LineNum() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    // console.log('scrollHeight+++++', scrollHeight);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // console.log('滚动距离++++++++', scrollTop);

      setNum(Math.floor((scrollTop / scrollHeight) * 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="LineNum">
      <div className="line" style={{ width: `${num}%` }}>
        {num}%
      </div>
    </div>
  );
}
