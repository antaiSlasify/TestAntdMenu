import { Layout } from 'antd';

import AppHeader from '../AppHeader';

type AppLayoutProps = {
  children: JSX.Element;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout>
      <AppHeader />
      {children}
    </Layout>
  );
};

export default AppLayout;
