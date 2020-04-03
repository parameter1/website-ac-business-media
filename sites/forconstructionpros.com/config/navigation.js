module.exports = {
  primary: {
    contextual: true,
    items: [
      {
        href: '/equipment',
        label: 'Equipment',
        children: [
          {
            href: '/equipment/attachments',
            label: 'Attachments',
          },
          {
            href: '/equipment/compaction',
            label: 'Compaction',
          },
          {
            href: '/equipment/earthmoving',
            label: 'Earthmoving',
          },
          {
            href: '/equipment/fleet-maintenance',
            label: 'Fleet Maintenance',
          },
          {
            href: '/equipment/snow-removal-equipment',
            label: 'Snow Removal',
          },
        ],
      },
      {
        href: '/rental',
        label: 'Rental',
        children: [
          {
            href: '/rental/lifting-equipment',
            label: 'Lifting Equipment',
          },
        ],
      },
      {
        href: '/business',
        label: 'Business',
        children: [
          {
            href: '/business/business-services',
            label: 'Business Services',
          },
        ],
      },
      {
        href: '/concrete',
        label: 'Concrete',
        children: [
          {
            href: '/concrete/decorative',
            label: 'Decorative',
          },
        ],
      },
      {
        href: '/asphalt',
        label: 'Asphalt',
        children: [
          {
            href: '/asphalt/additives',
            label: 'Additives',
          },
        ],
      },
      {
        href: '/pavement-maintenance',
        label: 'Pavement Maintenance',
        children: [
          {
            href: '/pavement-maintenance/marking-striping',
            label: 'Marking & Striping',
          },
        ],
      },
      {
        href: '/profit-matters',
        label: 'Profit Matters',
        children: [
        ],
      },
      {
        href: '/equipment-management',
        label: 'Equipment Management',
        children: [
          {
            href: '/equipment-management/fleet-news',
            label: 'Fleet News',
          },
          {
            href: '/equipment-management/management-standards',
            label: 'Management Standards',
          },
        ],
      },
    ],
  },
  secondary: {
    items: [
      { href: '/equipment', label: 'Equipment' },
      { href: '/rental', label: 'Rental' },
      { href: '/business', label: 'Business' },
      { href: '/concrete', label: 'Concrete' },
      { href: '/asphalt', label: 'Asphalt' },
      { href: '/pavement-maintenance', label: 'Pavement Maintenance' },
      { href: '/profit-matters', label: 'Profit Matters' },
      { href: '/equipment-management', label: 'Equipment Management' },
    ],
  },
  tertiary: {
    items: [
      {
        href: '#',
        label: 'Sign Up',
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
      { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/equipment', label: 'Equipment' },
        { href: '/rental', label: 'Rental' },
        { href: '/business', label: 'Business' },
        { href: '/concrete', label: 'Concrete' },
        { href: '/asphalt', label: 'Asphalt' },
        { href: '/pavement-maintenance', label: 'Pavement Maintenance' },
        { href: '/profit-matters', label: 'Profit Matters' },
        { href: '/equipment-management', label: 'Equipment Management' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/directory', label: 'New Equipment Directory' },
        { href: '/asphalt-industry-directory', label: 'Asphalt Industry Directory' },
        { href: '/economics', label: 'Economics' },
        { href: '/construction-technology', label: 'Technology' },
        { href: '/specguide', label: 'Spec Guides' },
        { href: '/video', label: 'Video Network' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/events', label: 'Events' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/page/sitemap', label: 'Site Section Map' },
        { href: '#', label: 'Newsletters', target: '_blank' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/magazine', label: 'Current Issue' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
