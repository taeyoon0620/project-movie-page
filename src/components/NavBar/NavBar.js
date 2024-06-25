import { Layout, Menu } from 'antd';
import React from 'react';

const { Header} = Layout;

const items1 = ['HOME', '메뉴'].map((key) => ({
  key,
  label: key,
}));

const NavBar = () => {

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['로고']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;