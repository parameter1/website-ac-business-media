const startServer = require('@ac-business-media/refresh-theme/start-server');
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
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
