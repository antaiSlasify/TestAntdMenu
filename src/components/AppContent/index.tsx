import { Layout } from 'antd';

import styles from './appContent.module.less';

type AppContentProps = {
  children: JSX.Element | JSX.Element[];
};
const { Content } = Layout;

const AppContent = ({ children }: AppContentProps) => {
  return <Content className={styles.content}>{children}</Content>;
};

export default AppContent;
