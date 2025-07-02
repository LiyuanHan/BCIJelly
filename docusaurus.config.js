// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BCIJelly',
  tagline: 'BCI is awesome!',
  url: 'https://liyuanhan.github.io',       
  baseUrl: '/BCIJelly/',                   

  organizationName: 'LiyuanHan',     
  projectName: 'BCIJelly',               
  deploymentBranch: 'gh-pages',         
  trailingSlash: false,                 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/LiyuanHan/BCIJelly/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/LiyuanHan/BCIJelly/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BCIhubdocs',
      logo: {
        alt: 'BCIhubdocs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/LiyuanHan/BCIJelly',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} My Project.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
