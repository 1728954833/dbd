import { Layout } from 'antd'
import { ContainerOutlined } from '@ant-design/icons'
import { Banner, Menu, ConnectButton } from '../component'
const { Header, Sider, Content } = Layout;

const theme: React.CSSProperties = {
  backgroundColor: '#2e3742',
  color: 'white'
}

const menus = [{
  label: "localhost",
  value: "localhost",
  icon: <ContainerOutlined />
}, {
  label: "wallex_local",
  value: "wallex_local",
  icon: <ContainerOutlined />
}, {
  label: "wallex_compliance_local",
  value: "wallex_compliance_local",
  icon: <ContainerOutlined />
}]

function App() {
  return <>
    <Layout className="h100">
      <Sider className='relative' style={theme}>
        <Banner />
        <Menu title={"DATABASE"} menus={menus} />
        <ConnectButton className='absolute b0 w100' />
      </Sider>
      <Layout>
        <Header style={theme}>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </>;
}

export default App;
