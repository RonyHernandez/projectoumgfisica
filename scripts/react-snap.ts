import express from 'express';
import fallback from 'express-history-api-fallback';
import http from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { run } from 'react-snap';
import serveStatic from 'serve-static';

const general = {
  port: 45678,
  externalServer: true,
  skipThirdPartyRequests: false,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions'],
  source: 'public',
  destination: 'public',
  publicPath: '/',
  inlineCss: false,
  minifyHtml: {
    collapseWhitespace: false,
    removeComments: false,
  },
};

const startServer = (options: { source: string; publicPath: string; port: number }) => {
  const sourceDir = path.normalize(`${process.cwd()}/${options.source}`);
  const app = express()
    .use(options.publicPath, serveStatic(sourceDir))
    .use(fallback('200.html', { root: sourceDir }));

  const server = http.createServer(app);
  server.listen(options.port);
  return server;
};

const server = startServer(general);

Promise.resolve()
  .then(() =>
    run({
      ...general,
      fixWebpackChunksIssue: false,
      userAgent: 'ReactSnap',
      viewport: {
        width: 1600,
        height: 1200,
      },
    }),
  )
  .catch(console.error)
  .then(() => {
    server.close();
  });
