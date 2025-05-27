const MF_MARKETING_APP_URL = process.env.MARKETING_APP_URL || 'http://localhost:3000';

const remotes = (isServer, isTypes) => {
  const location = isServer ? 'ssr' : 'chunks';
  const baseUrl = isTypes ? 'http://localhost:3004' : MF_MARKETING_APP_URL;
  return {
    mf_marketing: `mf_marketing@${baseUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

const MF_OPTIONS = (isServer, isTypes) => {
  return {
    name: 'mf_catalog',
    // remotes: remotes(isServer, isTypes),
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
      './Banner': './src/components/Banner',
      './Counter': './src/components/Counter',
      './FavoritesDropdown': './src/components/FavoritesDropdown',
      './FeaturedProductsByCategoryCTA': './src/components/FeaturedProductsByCategoryCTA',
      './ProductDetail': './src/components/ProductDetail',
      './PDPService': './src/services/PDPService.ts',
      './ProductListing': './src/components/ProductListing',
    },
    shared: {
      'next-localization': {
        singleton: true,
        import: undefined,
        version: '0.12.0',
        requiredVersion: '^0.12.0',
      },
    },
    extraOptions: {
      // automaticAsyncBoundary: true,
      // exposePages: true,
    },
  };
};

module.exports = MF_OPTIONS;
