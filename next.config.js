/** @type {import('next').NextConfig} */
const withTwin = require('./withTwin.js');

module.exports = withTwin({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/*',
      },
    ],
  },
});
