const topics = [
  { href: '/warehousing', label: 'Warehousing' },
  { href: '/transportation', label: 'Transportation' },
  { href: '/sourcing-procurement', label: 'Procurement' },
  { href: '/risk-compliance', label: 'Risk & Compliance' },
  { href: '/software-technology', label: 'Software & Technology' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/professional-development', label: 'Prof Development' },
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
      { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/webinars', label: 'Webinars' },
      { href: 'https://sdcexec.tradepub.com/?pt=dir&page=sdcexec', label: 'Sponsored Research', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      {
        href: 'https://acbm.dragonforms.com/SDCEnew&pk=SDCE',
        label: 'Magazine',
        icon: 'book',
        forceLabel: true,
        target: '_blank',
      },
      {
        href: 'https://acbm.dragonforms.com/loading.do?omedasite=SDCE_NL_signup',
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
      { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
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
        { href: '/magazine', label: 'Magazines' },
        { href: '/awards', label: 'Awards' },
        { href: 'https://sdcexec.tradepub.com/?pt=dir&page=sdcexec', label: 'Sponsored Research', target: '_blank' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/modex', label: 'MODEX' },
        { href: '/events', label: 'Events' },
        { href: '/webinars', label: 'Webinars' },
        { href: 'http://www.supplychainlearningcenter.com/', label: 'Learning Center', target: '_blank' },
        { href: '/podcasts', label: 'Podcasts' },
        { href: '/videos', label: 'Videos' },
        { href: '/blogs', label: 'Expert Columnists' },
        { href: '/multimedia', label: 'Multimedia' },
        { href: '/scn-summit', label: 'SCN Summit' },
        { href: '/20-year-anniversary', label: '20 Year Anniversary Coverage' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://acbm.dragonforms.com/loading.do?omedasite=SDCE_NL_signup', label: 'Newsletters', target: '_blank' },
        { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
