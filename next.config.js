/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const path = require('path');

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig = {
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID

  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/scss')],
    prependData: `@import "app.scss";`,
  },
  images: {
    domains: [
      'imgix.cosmicjs.com',
      'cdn.sanity.io',
      'lh3.googleusercontent.com',
      'localhost',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;