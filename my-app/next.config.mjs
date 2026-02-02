/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 1️⃣ Allow specific domains
    domains: ['5.imimg.com'],

    // 2️⃣ Allow images from a specific hostname with any path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fashiondoctorz.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
