/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["hamyarzaban.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/group-class",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
