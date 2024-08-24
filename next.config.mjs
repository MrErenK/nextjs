/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
      return [
        {
            source: '/',
            destination: '/home',
            permanent: true,
        },
        {
            source: '/about-me',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/contact-me',
            destination: '/contact',
            permanent: true,
        },
        {
            source: '/projects',
            destination: '/stuff',
            permanent: true,
        },
        {
            source: '/portfolio',
            destination: '/about',
            permanent: true,
        },
      ];
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
      },
      reactStrictMode: false,
      images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      },
  };

  export default nextConfig;