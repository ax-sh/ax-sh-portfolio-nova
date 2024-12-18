import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  devIndicators: { buildActivity: true, appIsrStatus: true },
};

export default nextConfig;
