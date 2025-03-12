/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  experimental: {
    // Try enabling Turbo mode explicitly
    turbo: {
      rules: {
        // configure turbo to handle CSS
        ".css$": {
          "postcss-loader": {}
        }
      }
    }
  }
};

module.exports = nextConfig;
