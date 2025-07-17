const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy for nextApp1
app.use(
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/home': '/', // rewrite path
    // },
    pathFilter: (path) => !path.startsWith('/catalog') && !path.startsWith('/playground'),
  })
);

// Proxy for nextApp2
app.use(
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathFilter: (path) => path.startsWith('/catalog') || path.startsWith('/playground'),
    // pathRewrite: {
    //   '^/catalog': '/', // rewrite path
    // },
  })
);

app.listen(3002, () => {
  console.log('Proxy server is running on http://localhost:3002');
});
