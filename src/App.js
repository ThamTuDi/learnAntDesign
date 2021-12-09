import { Layout } from 'antd';

import './app.css'
import Home from './Components/Home';
const { Header, Content, Footer } = Layout;
export default function App() {
  
  return (
    <Layout>
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