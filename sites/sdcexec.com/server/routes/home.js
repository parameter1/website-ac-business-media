const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const home = require('@ac-business-media/refresh-theme/templates/index');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
