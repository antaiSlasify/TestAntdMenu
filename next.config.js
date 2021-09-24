const withLess = require('next-with-less');

const NAV_BACKGROUND_COLOR = '#444f60';
const DEEP_GRAY = '#2b3648';

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        'drawer-bg': NAV_BACKGROUND_COLOR, // origin #344258
        'layout-header-background': NAV_BACKGROUND_COLOR,
        'menu-dark-bg': NAV_BACKGROUND_COLOR,
        'menu-dark-inline-submenu-bg': DEEP_GRAY,
        'menu-dark-color': '#fff',
      },
    },
  },
  i18n: {
    locales: ['en-us', 'zh-tw', 'zh-cn'],
    defaultLocale: 'en-us',
  },
  env: {
    baseUrl: 'https://sf-web-react.vercel.app',
    // baseUrl: 'http://localhost:3000',
  },
});
