import React from 'react';
import { HashRouter as Router, Link, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../router';

// 引入antd组件
import { Layout, Menu, Spin } from 'antd';
// 引入antd图标
import { RocketFilled } from '@ant-design/icons';


import './layout.css';
import logo from './image/logo192.png';

function LayoutView() {
  return (
    <Router>
      <Layout>
        {/* 侧边栏 */}
        <Layout.Sider
          width="250px"
          style={ { minHeight: '100vh' } }
        >
          <div className="logo-wraper">
            <img className="logo-icon" src={logo} alt="logo" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/'>
                <RocketFilled style={ {fontSize: '18px'} } />
                <span style={ {fontSize: '18px'} }>首页介绍</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/refs-test'>
                <RocketFilled style={ {fontSize: '18px'} } />
                <span style={ {fontSize: '18px'} }>Refs测试</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/set-state-test?id=234'>
                <RocketFilled style={ {fontSize: '18px'} }/>
                <span style={ {fontSize: '18px'} }>setState测试</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/hooks-test'>
                <RocketFilled style={ {fontSize: '18px'} }/>
                <span style={ {fontSize: '18px'} }>Hooks测试</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>

        {/* 右边内容区 */}
        <Layout style={ { minHeight: '100vh'} }>
          <Layout.Header style={ { background: '#fff', paddingLeft: '16px' } }></Layout.Header>
          <Layout.Content
            style={{
              margin: '24px 0px',
              padding: '0 24px',
              minHeight: '600px',
            }}
          >
            <React.Suspense fallback={ <div><Spin size="large" /></div> }>
              <Switch>
                {renderRoutes(Routes)}
              </Switch>
            </React.Suspense>
          </Layout.Content>
          <Layout.Footer style={{textAlign: 'center', background: '#fff'}}>2020-2021 Copyright</Layout.Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default LayoutView;