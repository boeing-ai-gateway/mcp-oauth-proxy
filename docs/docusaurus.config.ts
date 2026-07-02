import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP OAuth Proxy',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://boeing-ai-gateway.github.io',
  baseUrl: '/mcp-oauth-proxy/',
  organizationName: 'boeing-ai-gateway',
  projectName: 'mcp-oauth-proxy',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/boeing-ai-gateway/mcp-oauth-proxy/tree/main/docs',
          routeBasePath: "/", // Serve the docs at the site's root
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    navbar: {
      logo: {
        alt: 'MCP OAuth Proxy Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          href: "https://github.com/boeing-ai-gateway/mcp-oauth-proxy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: "GitHub",
          to: "https://github.com/boeing-ai-gateway/mcp-oauth-proxy",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OBot Platform`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
