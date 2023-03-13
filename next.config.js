/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  runtimeCaching,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  buildExcludes: [/middleware-manifest\.json$/],
  disable: false,
});

const nextConfig = withPWA({
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  experimental: {
    appDir: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
})

module.exports = nextConfig
