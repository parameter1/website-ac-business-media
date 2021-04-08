const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const specGuides = require('./spec-guides');
const dragonForms = require('./dragon-forms');
const events = require('./events');

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  specGuides,
  algoliaSearch: {
    enabled: true,
    filters: {
      enabled: true,
      sectionIds: [
        54289, // Asphalt
        54300, // Business
        54436, // Concrete
        54319, // Construction Technology
        54330, // Equipment
        54468, // Pavement Maintenance
      ],
      contentTypes: {
        Article: 'Articles',
        Blog: 'Blogs',
        Company: 'Companies',
        Document: 'Documents',
        MediaGallery: 'Media Galleries',
        News: 'News',
        PressRelease: 'Press Releases',
        Podcast: 'Podcasts',
        Product: 'Products',
        Video: 'Videos',
        Webinar: 'Webinars',
        Whitepaper: 'White Papers',
      },
    },
  },
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForConstructionPros', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/4ConstructnPros', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forconstructionpros', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/ForConstructionPros', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@FCPnews', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '4448cfcb-e2da-40ff-8be6-671110964914',
    submissionFieldIds: [
      { name: 'comments', id: '580f6d056cdeea4730ddbb2c' },
    ],
  },
  gtm: {
    containerId: 'GTM-PNBSZL4',
  },
  mediaFuse: {
    id: 6060,
  },
  gcse: {
    id: '003355913687346718228:la4zrhjf2r9',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&q=70',
    },
    to: 'support@forconstructionpros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'ForConstructionPros.com <noreply@baseplatform.io>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&q=70&bg=000000&pad=5',
    bgColor: '#000',
  },
};
