import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // needed for static generation
  reactStrictMode: true,
  devIndicators: { buildActivity: true, appIsrStatus: true },
  images: { unoptimized: true },
};

export default nextConfig;
