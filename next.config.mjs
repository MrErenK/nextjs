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
    experimental: {
        optimizeServerReact: process.env.NODE_ENV === 'production',
        optimizeCss: process.env.NODE_ENV === 'production',
        optimizePackageImports: [ 'mailgun.js', 'form-data', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'sweetalert2' ],
        optimisticClientCache: process.env.NODE_ENV === 'production',
    },
  };
  
  export default nextConfig;