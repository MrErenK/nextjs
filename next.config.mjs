/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
      return [
        {
            source: '/home',
            destination: '/',
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
  };
  
  export default nextConfig;