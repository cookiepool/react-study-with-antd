import { HashRouter as Router, Link, Route } from 'react-router-dom';

import { Layout, Menu, Button } from 'antd';

import './layout.css';

import logo from './image/logo192.png';

function LayoutView() {
  return (
    <Router>
      <Layout>
        {/* 侧边栏 */}
        <Layout.Sider>
          <div className="logo-wraper">
            <img src={logo} alt="logo" />
          </div>
          <Menu>
            <Menu.Item></Menu.Item>
          </Menu>
        </Layout.Sider>

        {/* 右边内容区 */}
      </Layout>
      <Button type="primary">按钮</Button>
    </Router>
  );
}

export default LayoutView;