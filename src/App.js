import { Layout, Menu } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import './app.css'
import Home from './Components/Home';
const { Header, Content, Footer, Sider } = Layout;
export default function App() {
  
  return (
    <Layout>
    {/* <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Khách hàng
        </Menu.Item>
       
      </Menu>
    </Sider> */}
    <Layout className="site-layout" style={{ }}>
      <Header className="site-layout-background" style={{ paddingLeft: 20 }} >
        <h2>Danh sách ảnh</h2>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
         <Home/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}