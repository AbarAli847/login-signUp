/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow specific domains
    domains: ['5.imimg.com'],

    // Allow images from specific hostnames with any path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fashiondoctorz.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
