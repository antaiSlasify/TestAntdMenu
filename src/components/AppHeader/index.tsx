import { Layout, Select } from 'antd';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import AppMenu from '../AppMenu';
import { setLocaleCookie } from '@/utils/i18n';
import { constant } from '@/utils/constant';

import styles from './appHeader.module.less';

const { Header } = Layout;
const { Option } = Select;
const { zh_tw, zh_cn, en_us } = constant;

const AppHeader = () => {
  const intl = useIntl();
  const router = useRouter();
  const pathName = router.pathname;
  const onLangChange = (langCode: string) => {
    router.push(`${langCode}${pathName}`, `${langCode}${pathName}`, {
      locale: langCode,
    });
    setLocaleCookie(langCode);
  };
  return (
    <Header className={styles.antLayoutHeader}>
      <div className={styles.containerFluid}>
        <div className={styles.header}>
          <div className={styles.menuContainer}>
            <AppMenu />
            <Select
              defaultValue={intl.locale}
              className={styles.select}
              onChange={onLangChange}
            >
              <Option value={en_us}>Enlish</Option>
              <Option value={zh_cn}>中文 ( 简体 )</Option>
              <Option value={zh_tw}>中文 ( 繁體 )</Option>
            </Select>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
