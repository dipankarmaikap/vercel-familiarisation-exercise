/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/hello-vercel",
        destination: "https://vercel.com/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
