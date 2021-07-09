const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const podcasts = require('@ac-business-media/refresh-theme/templates/website-section/podcasts');
const publishedVideos = require('@ac-business-media/refresh-theme/templates/website-section/published-videos');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

const directory = require('../templates/website-section/directory');

module.exports = (app) => {
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
