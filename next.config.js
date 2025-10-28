// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // THIS IS THE CORRECT LOCATION for Next.js 14+
  transpilePackages: ['@clerk/nextjs', '@clerk/shared'], 

  // If you don't have other experimental settings, you can remove this block entirely:
  // experimental: { 
  //   // ... 
  // },

  // ... other config settings ...
};

module.exports = nextConfig;