
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allow these dev origins for popup / redirect Firebase Auth
    allowedDevOrigins: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://192.168.1.112:3000',
      'http://192.168.1.199:3000', 
    ],
  },

  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          
          { key: 'Cross-Origin-Opener-Policy', value: 'unsafe-none' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
        ],
      },
    ];
  },

  reactStrictMode: true,

  swcMinify: true,
};

module.exports = nextConfig;
