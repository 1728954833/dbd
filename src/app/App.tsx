import { Layout } from 'antd'
import { Banner, Menu } from '../component'
const { Header, Sider, Content } = Layout;

const theme: React.CSSProperties = {
  backgroundColor: '#2e3742',
  color: 'white'
}

function App() {
  return <>
    <Layout className="h100">
      <Sider style={theme}>
        <Banner />
        <Menu title={"test"} menus={[{
          label: "1",
          value: "1"
        }]}>

        </Menu>
      </Sider>
      <Layout>
        <Header style={theme}>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </>;
}

export default App;
