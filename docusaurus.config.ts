import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Moderation Guide',
  titleDelimiter: '·',

  url: 'https://chainflip.be-crypto.eu/',
  baseUrl: '/44380ae0c74f243a9f55b3b39e6d88739a4d575b/',
  trailingSlash: true,

  organizationName: 'cumpsd',
  projectName: 'chainflip-moderation',
  deploymentBranch:'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: './custom.css',
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        docsDir: 'docs',
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
        hashed: true,
        language: ['en'],
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        routeBasePath: '/',
        sidebarPath: './sidebars.ts',
      },
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Moderation Guide',
      hideOnScroll: true,
    },

    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;