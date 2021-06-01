const topics = [
  { href: '/warehousing', label: 'Warehousing' },
  { href: '/transportation', label: 'Transportation' },
  { href: '/technology', label: 'Software & Technology' },
  { href: '/safety', label: 'Safety & Security' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/risk-compliance', label: 'Risk & Compliance' },
  { href: '/scn-summit', label: 'SCN Summit' },
];

module.exports = {
  primary: {
    items: topics,
  },
  secondary: {
    items: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/awards', label: 'Awards' },
      { href: '/events', label: 'Events' },
      { href: '/blogs', label: 'Expert Columnists' },
      { href: 'https://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/podcast', label: 'Podcasts' },
      // { href: 'https://www.supplychainlearningcenter.com/', label: 'Learning Center', target: '_blank' },
      { href: 'https://foodlog.tradepub.com', label: 'Sponsored Research', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      {
        href: 'https://foodlogistics.dragonforms.com/Flnew&pk=FL',
        label: 'Magazine',
        icon: 'book',
        forceLabel: true,
        target: '_blank',
      },
      {
        href: 'https://acbm.dragonforms.com/loading.do?omedasite=FLOG_NL_signup',
        label: 'Newsletter',
        icon: 'mail',
        forceLabel: true,
        target: '_blank',
      },
      {
        href: '/search',
        label: 'Search',
        icon: 'search',
        forceLabel: true,
      },
    ],
  },
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: topics,
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/awards', label: 'Awards' },
        { href: 'https://foodlog.tradepub.com', label: 'Sponsored Research', target: '_blank' },
        { href: '/blogs', label: 'Expert Columnists' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/modex', label: 'MODEX' },
        { href: 'https://cms.megaphone.fm/channel/supplychain', label: 'Podcasts', target: '_blank' },
        { href: '/videos', label: 'Videos' },
        { href: '/events', label: 'Events' },
        { href: 'https://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/webinars', label: 'Webinars' },
        { href: 'https://www.supplychainlearningcenter.com/', label: 'Learning Center', target: '_blank' },
        { href: '/multimedia', label: 'Multimedia' },
        { href: '/scn-summit', label: 'SCN Summit' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://acbm.dragonforms.com/loading.do?omedasite=FLOG_NL_signup', label: 'Newsletters', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
        { href: '/site-map', label: 'Site Map' },
      ],
    },
  ],
};
