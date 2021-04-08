const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

const sectionSearchIds = [
  64168, // Access Control
  64166, // Business
  64171, // Codes / Standards
  64167, // Construction / Design
  64170, // Healthcare
  64169, // Security & Safety
  64172, // Sustainability
];

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/fordsspros/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ssopenings', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/SafeSecureOpenings', target: '_blank' },
  ],
  radix: {
    enabled: false,
    // url: 'https://radix.base.parameter1.com',
    // appId: '436dd265-a7ac-4608-8331-d5ea70e65102',
    // submissionFieldIds: [
    //   { name: 'comments', id: '5b99725a81284d4fc4e58233' },
    // ],
  },
  gtm: {
    containerId: 'GTM-M92TRPK',
  },
  // mediaFuse: {
  //   id: 6062,
  // },
  gcse: {
    id: '003355913687346718228:zrqhmh7lvw4',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Safe & Secure Openings <noreply@baseplatform.io>',
    logo: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress&q=70',
    bgColor: '#164f77',
  },
  // add back in to enable content page search inputs
  // sectionSearchIds,
  algoliaSearch: {
    // set to true to enable simple algolia search
    enabled: true,
    filters: {
      // set to true to enable algolia search with filters
      enabled: false,
      sectionIds: sectionSearchIds,
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
};
