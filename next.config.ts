import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mmlabassets.github.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                pathname: '/mmlab/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.kinetixai.cn',
                pathname: '/**',
            },
        ],
        domains: ["ik.imagekit.io"], 
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
