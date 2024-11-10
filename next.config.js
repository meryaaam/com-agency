/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone' , 
    images: {
      domains: [
        'uploadthing.com',
        'utfs.io',
        'img.clerk.com',
        'subdomain',
        'files.stripe.com',
        'images.unsplash.com',
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.NEXT_PUBLIC_API_URL.replace(/^https?:\/\//, ''),
        },
         
      ],
    },
  };
  
  module.exports = nextConfig;
  