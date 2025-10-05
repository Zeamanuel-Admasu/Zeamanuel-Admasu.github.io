/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // build to ./out as static HTML
  images: { unoptimized: true }, // make <Image> work without the Next server
};
module.exports = nextConfig;
