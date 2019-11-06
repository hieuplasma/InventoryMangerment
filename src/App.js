import React, { Component } from 'react';
import './App.css';
import './antd.css';
import {
  BrowserRouter,
  Route,
  Link,
  Router,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Avatar, Dropdown, Drawer } from 'antd';
import Srcicon from './resource/Srcicon';
import BreadcrumbCustom from './components/BreadcrumbCustom';
import ReportingScreen from './containers/report/ReportingScreen';
import WorkingScreen from './containers/work/WorkingScreen';
import FindProductScreen from './containers/product/FindProductScreen';
import AddProductScreen from './containers/product/AddProductScreen';
import EditPtoductScreen from './containers/product/EditPtoductScreen';
import InputScreen from './containers/inventory/InputScreen';
import OutputScreen from './containers/inventory/OutputScreen';
import HomeScreen from './containers/HomeScreen';
import DetailProduct from './containers/product/DetailProduct';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onClickMenuItem = (e) => {
    const { history } = this.props;
    switch (e.key) {
      case "11":
        history.push("/findproduct");
        break;
      case "12":
        history.push("/addproduct");
        break;
      case "13":
        history.push("/editproduct");
        break;
      case "21":
        history.push("/input-inventory");
        break;
      case "22":
        history.push("/out-inventory");
        break;
      case "3":
        history.push('/report');
        break;
      case "4":
        history.push('/work');
        break;

    }
  }

  _key() {
    const pathname = this.props.history.location.pathname
    switch (pathname) {
      case "/":
        return "1";
      case "/page2":
        return "2"
    }
  }


  render() {
    const { collapsed } = this.state;
    console.log(this.props.history.location.pathname)
    let page = <Layout >
      <Sider trigger={null} collapsible collapsed={this.state.collapsed} width={250} >
        <div
          style={{
            margin: 10,
            flexDirection: "row",
            display: "flex",
            padding: 5
          }}
        >
          <img
            onClick={() => this.props.history.push('/')}
            src={Srcicon.inventory}
            style={{ width: 35, height: 35, borderRadius: 15, cursor: 'pointer' }}

          />
          {collapsed ? (
            <div />
          ) : (
              <h3 style={{ color: "white", margin: "auto", cursor: 'pointer' }} onClick={() => this.props.history.push('/')}>Inventory Managerment</h3>
            )}
        </div>
        <Menu theme="dark" mode="inline" onClick={this.onClickMenuItem} >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="bg-colors" />
                <span>Quản lý sản phẩm</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <Icon type="key" />
              <span>Tìm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="12" color={'blue'}>
              <Icon type="api" />
              <span>Thêm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="dollar" />
              <span>Sửa sản phẩm</span>
            </Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="2">
            <Icon type="home" />
            <span>Quản lý kho</span>
          </Menu.Item> */}
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type='home' />
                <span>Quản lý kho</span>
              </span>
            }
          >
            <Menu.Item key="21">
              <Icon type="fullscreen-exit" />
              <span>Nhập kho</span>
            </Menu.Item>
            <Menu.Item key="22">
              <Icon type="fullscreen" />
              <span>Xuất kho</span>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="3">
            <Icon type="file-text" />
            <span>Lập báo cáo</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="tool" />
            <span>Công việc</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 20,
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "row", width: "50%", alignItems: 'center' }}
          >
            <Icon
              style={{ fontSize: 20, marginRight: 10 }}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <BreadcrumbCustom />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "50%"
            }}
          >
            {/* <Dropdown
                style={{ display: "flex", flexDirection: "row-reverse" }}
                overlay={menuAuthen}
                placement="bottomCenter"
              >
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  <Avatar icon="user" />
                  <p style={{ marginTop: -17, marginRight: 10 }}>{userInfo ? userInfo.name : "Chưa đăng nhập"}</p>
                </a>
              </Dropdown> */}
            <a
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                color: "rgba(0, 0, 0, 0.65)"
              }}
            >
              <Icon type="logout" style={{ fontSize: 30, marginLeft: 10, color: '#ccc' }} />
              <Avatar icon="user" />
              <p style={{ marginTop: -17, marginRight: 10 }}>{'Tran Minh Hieu'}</p>
              <Icon type="info-circle" style={{ fontSize: 30, marginRight: 20, color: '#ccc' }} />
              <Icon type="home" style={{ fontSize: 30, marginRight: 20, color: '#ccc' }} />
            </a>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: "calc(100vh - 50px)"
          }}
        >

          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/findproduct/:id" component={DetailProduct} />
            <Route path="/findproduct" component={FindProductScreen} />
            <Route path="/addproduct" component={AddProductScreen} />
            <Route path="/editproduct" component={EditPtoductScreen} />
            <Route path="/input-inventory" component={InputScreen} />
            <Route path="/out-inventory" component={OutputScreen} />
            <Route path="/report" component={ReportingScreen} />
            <Route path="/work" component={WorkingScreen} />
          </Switch>

        </Content>

      </Layout>

      {/* <Drawer
          title="Cài đặt tài khoản"
          width={320}
          closable={false}
          onClose={() => { this.setState({ openAccountSetting: false }) }}
          visible={this.state.openAccountSetting}
        >
          <AccountSettingsComponent closeAccountSetting={() => { this.setState({ openAccountSetting: false }) }} />
        </Drawer> */}

    </Layout >

    return (
      page
    )
  }
}


export default withRouter(App);
