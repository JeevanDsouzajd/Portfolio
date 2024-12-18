/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = {
  experimental: {
    images: { unoptimized: true },
  },
  redirects() {
    return [
      {
        source: '/thanks', 
        destination: '/thank-you',
        permanent: false,
      },
    ];
  },
};
