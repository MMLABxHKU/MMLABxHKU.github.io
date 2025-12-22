'use client';

import { useRef, useState } from 'react';

export default function CitationBlock() {
  const blockRef = useRef<HTMLParagraphElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (blockRef.current) {
      try {
        await navigator.clipboard.writeText(blockRef.current.innerText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    }
  };

  return (
    <div className="mt-6 flex flex-row gap-6 justify-center">
      <div></div>
      <div className="relative w-full max-w-3xl">
        {/* 右上角复制按钮 */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-sm bg-transparent hover:bg-white/10 transition"
          title="Copy"
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2" />
            </svg>
          )}
        </button>

        <p
          ref={blockRef}
          className="w-full leading-relaxed p-4 bg-white/10 rounded-sm text-foreground"
        >
                                @article&#123;kaimanipteam2025kai0,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>author = &#123;KAI Manipulation Team&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>title = &#123;Is massive scale the only path to robotic dexterity? A $100,000 from-zero-to-hero recipe for garment manipulation&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>journal = &#123;HKU MMLab Research Blog&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>year = &#123;2025&#125;,
                                <br></br>
                                <span className="select-none">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>note = &#123;https://mmlab.hk/research/Kai0&#125;,
                                <br></br>
                                &#125;
        </p>
      </div>
      <div></div>
    </div>
  );
}