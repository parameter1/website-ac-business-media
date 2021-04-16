const startServer = require('@ac-business-media/refresh-theme/start-server');
const cufv1 = require('@ac-business-media/refresh-theme/redirect-handler-cufv1');
const algoliaSiteSearch = require('@ac-business-media/marko-web-algolia-site-search/middleware/algolia');
const algoliaSiteSearchPaginated = require('@ac-business-media/marko-web-algolia-site-search/middleware/paginated');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  onStart: (app) => {
    app.use(algoliaSiteSearch());
    app.use(algoliaSiteSearchPaginated());
  },
  redirectHandler: cufv1('update.oemoffhighway.com'),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
