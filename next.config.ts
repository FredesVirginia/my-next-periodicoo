import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },

       {
        protocol: 'https',
        hostname: 'static.diariofemenino.com',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'static.diariofemenino.com',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },


      
      // Agrega aquí otros dominios que uses   https://i.pinimg.com
    ],
  },
};

export default nextConfig;
