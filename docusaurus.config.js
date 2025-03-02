// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');


/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'nBold Docs',
  tagline: 'nBold documentation',
  url: 'https://docs.nbold.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'favicon.ico',

  trailingSlash: false, // Prevent GitHub pages to add slash

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'contents',
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/js/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/nboldhq/docs/tree/main/',
          remarkPlugins: [mdxMermaid],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-5688830-15',
          anonymizeIP: true,
        },
        // See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap#filename
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'https://assets.nbold.io/api/nbold-api-openapi-latest.yaml',
            route: '/api',
            layout: {
              title: 'API reference',
              description: 'nBold API reference',
            }
          },
          // {
          //   spec: 'http://127.0.0.1:5500/temp/api/nbold-api-openapi-latest.yaml',
          //   route: '/api',
          //   layout: {
          //     title: 'API reference',
          //     description: 'nBold API reference',
          //   }
          // },
          // {
          //   spec: 'https://assets.nbold.io/api/nbold-api-openapi-v2.yaml',
          //   route: '/api/v2',
          //   layout: {
          //     title: 'API reference',
          //     description: 'nBold API reference',
          //   }
          // }
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#ff003d',
          primaryColorDark: '#ff003d',
          // Redoc Options for modifying how redoc renders them
          options: {
            nativeScrollbars: false,
            hideLoading: false,
            showExtensions: ['x-nbold-rate-limit', 'x-nbold-required-roles']
          }
        }
      }
    ],
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          // {
          //   to: '/api',
          //   from: '/explorer2',
          // },
          // // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
        // createRedirects (existingPath) {
        //   if (existingPath.includes('/community')) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace('/community', '/docs/team'),
        //       existingPath.replace('/community', '/docs/support'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ],
  ],

  scripts: [
    {
      src: '/js/intercom.js',
      async: true,
    },
    {
      src: 'https://nbold.statuspage.io/embed/script.js',
      async: true,
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'picto.png',
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true
      // },
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'nBold logo',
          src: 'logo.png',
          srcDark: 'logo_dark.png',
          width: 115,
          height: 32,
          href: '/',
          target: '_self'
        },
        items: [
          {
            // type: 'doc',
            href: '/administrator-guide',
            position: 'left',
            label: 'Administrator Guide',
          },
          {
            // type: 'doc',
            href: '/catalog-manager-guide',
            position: 'left',
            label: 'Catalog Manager Guide',
          },
          {
            href: '/api',
            position: 'left',
            label: 'API Reference',
          },
          // {
          //   href: '/integrate-with-nbold/api',
          //   position: 'left',
          //   label: 'API',
          // },
          {
            href: '/integrate-with-nbold/no-code',
            position: 'left',
            label: 'No-Code',
          },
          {
            // type: 'doc',
            href: '/trust-center',
            position: 'right',
            label: '🛡️ Trust center',
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'nBold logo',
          src: 'logo.png',
          width: 115,
          height: 32,
          href: 'https://nbold.co',
          target: '_blank'
        },
        links: [
          {
            title: 'Table of contents',
            items: [
              {
                href: '/administrator-guide',
                label: 'Administrator Guide',
              },
              {
                href: '/catalog-manager-guide',
                label: 'Catalog Manager Guide',
              },
              {
                href: '/integrate-with-nbold',
                label: 'Integrate with nBold',
              },
              {
                href: '/api',
                label: 'API Reference',
              },
              // {
              //   href: '/integrate-with-nbold/api',
              //   label: 'API',
              // },
              {
                href: '/integrate-with-nbold/no-code',
                label: 'No-Code',
              },
              {
                href: '/trust-center',
                label: 'Trust center',
              },
            ],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nbold',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nboldco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://nbold.co/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nboldhq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()
          } SalesTim SAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
