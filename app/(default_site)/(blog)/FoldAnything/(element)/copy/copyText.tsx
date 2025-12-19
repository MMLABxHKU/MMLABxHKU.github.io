'use client';

import { useEffect, useRef, useState } from 'react';

import './copyText.scss';

export default function CopyText({ html }: { html: string }) {
  async function copyToClip(content: string) {
    if (!content) return;

    if (navigator?.clipboard?.writeText) {
      await navigator?.clipboard?.writeText(content);
    } else {
      const aux = document.createElement('textarea');
      aux.value = content;
      document.body.appendChild(aux);
      aux.select();
      document?.execCommand('copy');
      document.body.removeChild(aux);
    }

    alert('复制成功');
  }

  return (
    <div className="CopyText">
      <div className="htmlDiv">{html}</div>

      <div className="btn" onClick={() => copyToClip(html)}>
        复制
      </div>
    </div>
  );
}
