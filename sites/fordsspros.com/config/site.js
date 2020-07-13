const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=45',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=60',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    // { provider: 'linkedin', href: 'https://www.linkedin.com/company/green-industry-pros/', target: '_blank' },
    // { provider: 'twitter', href: 'https://twitter.com/greenindpros', target: '_blank' },
    // { provider: 'facebook', href: 'https://www.facebook.com/GreenIndustryPros', target: '_blank' },
    // { provider: 'instagram', href: 'https://www.instagram.com/greenindustrypros/', target: '_blank' },
    // { provider: 'flipboard', href: 'https://flipboard.com/@GreenIndustry', target: '_blank' },
  ],
  radix: {
    enabled: false,
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
      logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'GreenIndustryPros.com <noreply@baseplatform.io>',
    logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/static/dss-logo.png?h=60',
    bgColor: '#164f77',
  },
};
