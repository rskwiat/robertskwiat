/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	output: "export",
  basePath: process.env.NODE_ENV === "production" ? "": undefined,
	// assetPrefix: "/robertskwiat/"
}

module.exports = nextConfig
