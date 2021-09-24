import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';

import AppLayout from '../components/AppLayout';

import 'antd/dist/antd.less';
import '@/styles/globals.less';

import localeEN from '../locales/en-US';
import localeTW from '../locales/zh-TW';
import localeCN from '../locales/zh-CN';

import { constant } from '../utils/constant';
const { en_us, zh_tw, zh_cn } = constant;
const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const shortLocale = locale ? locale : en_us;
  const messages = useMemo(() => {
    switch (shortLocale) {
      case en_us:
        return localeEN;
      case zh_tw:
        return localeTW;
      case zh_cn:
        return localeCN;
      default:
        return localeEN;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </IntlProvider>
  );
};

export default MyApp;
