/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      { domain: "http://localhost:3000", defaultLocale: "en" },
      { domain: "http://localhost:3000/ar", defaultLocale: "ar" },
    ],
  },
};

module.exports = nextConfig;
