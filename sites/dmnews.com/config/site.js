const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const events = require('./events');

module.exports = {
  gam,
  nativeX,
  navigation,
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/DirectMarketingNews', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/dmnews', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dm-news/?trk=biz-co', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/dmn_marketing/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-M4ZFPK7',
  },
  mediaFuse: {
    id: 6059,
  },
  gcse: {
    id: '017383739850048358259:9et21cn0jag',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#28ace2',
      logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'DMNews.com <noreply@baseplatform.io>',
    logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/DMNLogoWhite.png?h=60&auto=format,compress&q=70',
    bgColor: '#28ace2',
  },
};
