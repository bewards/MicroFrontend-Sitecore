const MF_OPTIONS = (isServer) => {
  return {
    name: 'mf_marketing',
    remotes: {
      mf_catalog: `mf_catalog@${
        process.env.CATALOG_APP_URL || 'http://localhost:3001'
      }/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    },
    filename: 'static/chunks/remoteEntry.js',
    dts: false,
    shared: {
      'next-localization': {
        singleton: true,
        import: undefined,
        version: '0.12.0',
        requiredVersion: '^0.12.0',
      },
    },
    extraOptions: {
      automaticAsyncBoundary: true,
      exposePages: true,
    },
  };
};

module.exports = MF_OPTIONS;
