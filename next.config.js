/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;


module.exports = {
  async rewrites() {
    return [
      {
        source: '/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/chi-tiet-quy-trinh/:id',
        destination: '/quan-ly-tuyen-dung/chi-tiet-quy-trinh',
      },
    ];
  },
};