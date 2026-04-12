/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel uses the default ".next"; locally we use ".next-dev" to avoid
  // Dropbox file-lock conflicts on Windows.
  distDir: process.env.VERCEL ? ".next" : ".next-dev",
};

export default nextConfig;
