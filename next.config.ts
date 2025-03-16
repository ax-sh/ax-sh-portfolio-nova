import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // needed for static generation
  reactStrictMode: true,
  devIndicators: { position: 'top-left' },
  images: { unoptimized: true },
};

export default nextConfig;
