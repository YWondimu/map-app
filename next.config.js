/** @type {import('next').NextConfig} */
const nextConfig = {
    //not really sure what these do
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig;
