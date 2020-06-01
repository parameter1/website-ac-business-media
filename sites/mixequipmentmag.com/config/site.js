const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Astec Industries, Inc',
  logos: {
    navbar: {
      src: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=45',
      srcset: [
        'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60',
      srcset: [
        'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AstecInc1', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-55P9PL4',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.mixequipmentmag.com/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60',
    },
    to: 'nraether@acbusinessmedia.com',
  },
};
