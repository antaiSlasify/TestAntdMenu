import { Menu } from 'antd';
import { useIntl } from 'react-intl';

import styles from './appMenu.module.less';

const { Item } = Menu;

const menuItems = [
  {
    key: 'hire',
    href: '',
    messageId: 'nav.hire_your_team',
    defaultMessage: '招募遠距團隊',
  },
  {
    key: 'services',
    href: '',
    messageId: 'nav.services',
    defaultMessage: '服務',
  },
  {
    key: 'pricing',
    href: '',
    messageId: 'nav.pricing.title',
    defaultMessage: '價格方案',
  },
  {
    key: 'task-board',
    href: '',
    messageId: 'nav.task_board',
    defaultMessage: '遠距工作職缺',
  },
  { key: 'blog', href: '', messageId: 'nav.blog', defaultMessage: '部落格' },
];

const AppMenu = () => {
  const intl = useIntl();

  return (
    <Menu mode="horizontal" theme="dark" selectable={false}>
      {menuItems.map((item) => (
        <Item key={item.key}>
          <a className={styles.textLight}>
            {intl.formatMessage({
              id: item.messageId,
              defaultMessage: item.defaultMessage,
            })}
          </a>
        </Item>
      ))}
    </Menu>
  );
};

export default AppMenu;
