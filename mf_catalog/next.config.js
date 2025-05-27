// import NextFederationPlugin from '@module-federation/nextjs-mf';
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const MF_OPTIONS = require('./mf.config');

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  assetPrefix: 'http://localhost:3001',
  i18n: {
    // These are all the locales you want to support in your application.
    // These should generally match (or at least be a subset of) those in Sitecore.
    locales: ['en', 'es-ES'],
    // This is the locale that will be used when visiting a non-locale
    // prefixed path e.g. `/styleguide`.
    defaultLocale: 'en',
  },
  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      // This is a workaround for the issue with module federation and Next.js client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        os: false,
        path: false,
      };
    }
    // const mfOptions = MF_OPTIONS(isServer);
    config.plugins.push(new NextFederationPlugin(MF_OPTIONS(isServer)));
    config.plugins.push(
      new FederatedTypesPlugin({
        federationConfig: MF_OPTIONS(isServer, false),
        typeFetchOptions: {
          downloadRemoteTypesTimeout: 10000,
          maxRetryAttempts: 10,
          retryDelay: 2000,
        },
        // typeServeOptions: {
        //   port: 3003,
        //   host: 'localhost',
        // },
      })
    );
    // config.plugins.push({ test: /\.(js|jsx)?$/, exclude: /node_modules/, use: ['babel-loader'] });

    return config;
  },
};

module.exports = nextConfig;
// export default nextConfig;
