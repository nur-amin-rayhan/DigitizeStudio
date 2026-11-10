/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@digitize/shared', '@digitize/ui', '@digitize/database'],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
