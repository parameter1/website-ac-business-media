const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const cleanResponse = require('@parameter1/base-cms-marko-core/middleware/clean-marko-response');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const htmlSitemapRoutes = require('@parameter1/base-cms-marko-web-html-sitemap/routes');

const { version } = require('./package.json');
const siteRoutes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const document = require('./server/components/document');
const components = require('./server/components');
const fragments = require('./server/fragments');

const routes = (app) => {
  // HTML Sitemap
  htmlSitemapRoutes(app);
  // Load site routes.
  siteRoutes(app);
};

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  document,
  components,
  fragments,
  version,
  onStart: (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');

    // Use paginated middleware
    app.use(htmlSitemapPagination());

    // Clean all response bodies.
    app.use(cleanResponse());
  },
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
