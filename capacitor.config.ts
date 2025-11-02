import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.xportstore.ios',
  appName: 'X-Port — техника и аксессуары',
  webDir: 'dummy',
  server: {
    url: 'https://xportstore.ru',
    cleartext: false,
    allowNavigation: ['xportstore.ru', '*.xportstore.ru']
  },
  ios: {
    contentInset: 'always',
    allowsLinkPreview: true
  }
};

export default config;
