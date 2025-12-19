'use client';

import { useEffect, useRef, useState } from 'react';

import { EmailShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import './share.scss';

export default function Share({ title, content }: { title: string; content: string }) {
  // 复制链接
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
    <div className="Share flex">
      <div className="one">
        <TwitterShareButton url={window?.location?.href} title={title}>
          X
        </TwitterShareButton>
      </div>
      <div className="one">
        <LinkedinShareButton url={window?.location?.href}>In</LinkedinShareButton>
      </div>
      <div className="one">
        <EmailShareButton url={window?.location?.href} subject={title}>
          邮件
        </EmailShareButton>
      </div>
      <div className="one" onClick={() => copyToClip(window?.location?.href)}>
        链接
      </div>
    </div>
  );
}
