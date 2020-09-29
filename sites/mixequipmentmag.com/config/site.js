const navigation = require('./navigation');
const events = require('./events');

module.exports = {
  navigation,
  events,
  company: 'Astec Industries, Inc',
  logos: {
    navbar: {
      src: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AstecInc1', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/astecinc', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/astecinc', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/astecinc', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-55P9PL4',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60&auto=format,compress&q=70',
    },
    to: 'nraether@acbusinessmedia.com',
  },
};
