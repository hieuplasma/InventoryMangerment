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
import WorkerScreen from './containers/work/WorkerScreen';
import AssignScreen from './containers/work/AssignScreen';
import FindinInventory from './containers/inventory/FindinInventory';
import DetailWorkScreen from './containers/work/DetailWorkScreen';
import ListWorkSceen from './containers/work/ListWorkSceen';
import ReportWorkScreen from './containers/SelfWorkScreen/ReportWorkScreen';
import DetailSelfWorkScreen from './containers/SelfWorkScreen/DetailSelfWorkScreen';
import PhancongScreen from './containers/SelfWorkScreen/PhancongScreen';
import BaocaoScreen from './containers/SelfWorkScreen/BaocaoScreen';
import BottomComponent from './components/BottomComponent';
import RoutePageManager from './models/RoutePageManager';
import ReportWorkWoker from './containers/SelfWorkScreen/ReportWorkWoker';
import DetailSelfWorkerScreen from './containers/SelfWorkScreen/DetailSelfWorkerScreen';
import ReportOFWorker from './containers/SelfWorkScreen/ReportOFWorker';
import AskandAnswersScreen from './containers/AskandAnswersScreen';
import ProfileScreen from './containers/ProfileScreen';

import NotificationBadge from 'react-notification-badge';


const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;


const RoutePageManagerInstance = RoutePageManager.getRoutePageManagerInstance()
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      currentpage: RoutePageManagerInstance.getRoutePage()
    };
  }

  UNSAFE_componentWillMount() {
    RoutePageManagerInstance.addObserver(this);
  }

  componentWillUnmount() {
    RoutePageManagerInstance.removeObserver(this);
  }


  onRoutePageChanged = () => {
    this.props.history.push('/')
    this.setState({ currentpage: RoutePageManagerInstance.getRoutePage() }, () => this.forceUpdate())

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
      case "23":
        history.push("/find-in-inventory");
        break;
      case "3":
        history.push('/report');
        break;
      case "4":
        history.push('/work');
        break;
      case "42":
        history.push('/listwork');
        break;
      // case "43":
      //   history.push('/report-work');
      //   break;
      case "5":
        history.push('/report-work');
        break;
      case "7":
        history.push('/ask-answer');
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
    let menuAuthen = (
      <Menu
        theme="dark"
        onClick={e => {
          if (e.key == "1") {
            this.props.history.push('/profile')
          }
        }}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          Xem profile
        </Menu.Item>
      </Menu>
    );


    let menuNoti = (
      <Menu
        theme="light"
      >
        <Menu.Item key="1" >
          <div style={{ height: 50, borderTopColor: '#73d9bccc', borderTopWidth: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 250 }}>
            Trần Minh Hiếu vừa phân công nhập kho
          </div>
          <div style={{ width: '100%', height: 1, backgroundColor: '#73d9bcccc' }}>
         </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div style={{ height: 50, borderTopColor: '#73d9bccc', borderTopWidth: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 250 }}>
            Lê Minh Nguyễn vừa phân công xuất kho
          </div>
          <div style={{ width: '100%', height: 1, backgroundColor: '#73d9bcccc' }}>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div style={{ height: 50, borderTopColor: '#73d9bccc', borderTopWidth: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 250 }}>
            Nguyễn Thể Hưng yêu cầu lập báo cáo
          </div>
        </Menu.Item>
      </Menu>

    )


    console.log(this.props.history.location.pathname)
    let supermain
    let main = <div style={{ width: '100%', height: 400, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Button type="primary" style={{ width: 200, height: 100, margin: 10 }} onClick={() => RoutePageManagerInstance.updateRoutePage("2")}>
        Nhân viên
        </Button>
      <Button type="primary" style={{ width: 200, height: 100, margin: 10 }} onClick={() => RoutePageManagerInstance.updateRoutePage("3")}>
        Tổ trưởng
        </Button>
    </div>
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
          <Menu.Item key="5">
            <Icon type="area-chart" />
            <span>Công việc của tôi</span>
          </Menu.Item>
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
              <Icon type="search" />
              <span>Tìm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="12" color={'blue'}>
              <Icon type="plus-square" />
              <span>Thêm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="edit" />
              <span>Sửa sản phẩm</span>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type='home' />
                <span>Quản lý kho</span>
              </span>
            }
          >
            <Menu.Item key="23">
              <Icon type="search" />
              <span>Tìm kiếm sản phẩm</span>
            </Menu.Item>
            {/* <Menu.Item key="21">
              <Icon type="fullscreen-exit" />
              <span>Nhập kho</span>
            </Menu.Item>
            <Menu.Item key="22">
              <Icon type="fullscreen" />
              <span>Xuất kho</span>
            </Menu.Item> */}

          </SubMenu>
          {/* <Menu.Item key="3">
            <Icon type="file-text" />
            <span>Lập báo cáo</span>
          </Menu.Item> */}
          {/* <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="team" />
                <span>Công việc chung</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Icon type="file-search" />
              <span>List Nhân viên</span>
            </Menu.Item>
            <Menu.Item key="42">
              <Icon type="file-search" />
              <span>List Công việc</span>
            </Menu.Item>
         
          </SubMenu> */}
          <Menu.Item key="2">
            <Icon type="home" />
            <span> <a href={'http://hci09.it4440.phungluan.com/thietlapkpicapnhanvien.html'}> Xem KPI chung</a></span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="question" />
            <span> Câu hỏi thường gặp</span>
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
                  <p style={{ marginTop: -17, marginRight: 10 }}>{"Chưa đăng nhập"}</p>
                </a>
              </Dropdown> */}
            <a
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                color: "rgba(0, 0, 0, 0.65)"
              }}
            >
              <Icon type="logout" style={{ fontSize: 30, marginLeft: 10, color: '#73d9bc' }} onClick={() => { RoutePageManagerInstance.updateRoutePage("1") }} />
              {/* <Avatar icon="user" />
              <p style={{ marginTop: -17, marginRight: 10 }}>{'Tran Minh Hieu'}</p> */}
              <Dropdown
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
                  <p style={{ marginTop: -17, marginRight: 10 }}>{'Tran Minh Hieu'}</p>
                </a>
              </Dropdown>
              <Icon type="info-circle" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} />
              <Icon type="home" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} />
              {/* <Icon type="bell" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} /> */}

              <Dropdown
                style={{ display: "flex", flexDirection: "row-reverse" }}
                overlay={menuNoti}
                placement="bottomCenter"
              >
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  <div style={{ width: 20, height: 20, marginRight: 20 }}>
                    <NotificationBadge count={3} style={{ width: 20, height: 20 }} />
                  </div>
                  <Icon type="bell" style={{ fontSize: 30, marginRight: -17, color: '#73d9bc' }} />
                </a>
              </Dropdown>

              <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: -15, marginRight: 10 }}> Dành cho nhân viên</p>
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
            <Route path="/find-in-inventory" component={FindinInventory} />
            <Route path="/report" component={ReportingScreen} />
            <Route path="/work/manager/:id" component={WorkerScreen} />
            <Route path="/work/assign/:id" component={AssignScreen} />
            <Route path="/work" component={WorkingScreen} />
            <Route path="/listwork/:id" component={DetailWorkScreen} />
            <Route path="/listwork" component={ListWorkSceen} />
            <Route path="/report-work/:id" component={DetailSelfWorkerScreen} />
            <Route path="/report-work" component={ReportWorkWoker} />
            <Route path="/phan-cong/:id" component={PhancongScreen} />
            <Route path="/bao-cao/:id" component={ReportOFWorker} />
            <Route path="/ask-answer" component={AskandAnswersScreen} />
            <Route path="/profile" component={ProfileScreen} />
          </Switch>


        </Content>
        <Footer>
          <BottomComponent />
        </Footer>
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

    let page2 = <Layout >
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
          <Menu.Item key="5">
            <Icon type="area-chart" />
            <span>Công việc của tôi</span>
          </Menu.Item>
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="bg-colors" />
                <span>Quản lý sản phẩm</span>
              </span>
            }
          >
            <Menu.Item key="11">
              <Icon type="search" />
              <span>Tìm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="12" color={'blue'}>
              <Icon type="plus-square" />
              <span>Thêm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="edit" />
              <span>Sửa sản phẩm</span>
            </Menu.Item>
          </SubMenu> */}
          {/* 
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type='home' />
                <span>Quản lý kho</span>
              </span>
            }
          >
            <Menu.Item key="23">
              <Icon type="search" />
              <span>Tìm kiếm sản phẩm</span>
            </Menu.Item>
            <Menu.Item key="21">
              <Icon type="fullscreen-exit" />
              <span>Nhập kho</span>
            </Menu.Item>
            <Menu.Item key="22">
              <Icon type="fullscreen" />
              <span>Xuất kho</span>
            </Menu.Item>

          </SubMenu> */}
          <Menu.Item key="3">
            <Icon type="file-text" />
            <span>Lập báo cáo</span>
          </Menu.Item>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="team" />
                <span>Công việc chung</span>
              </span>
            }
          >
            <Menu.Item key="4">
              <Icon type="file-search" />
              <span>List Nhân viên</span>
            </Menu.Item>
            <Menu.Item key="42">
              <Icon type="file-search" />
              <span>List Công việc</span>
            </Menu.Item>
            {/* <Menu.Item key="43">
            <Icon type="area-chart" />
            <span>Báo cáo công việc</span>
          </Menu.Item> */}
          </SubMenu>
          <Menu.Item key="2">
            <Icon type="home" />
            <span> <a href={'http://hci09.it4440.phungluan.com/thietlapkpicapnhanvien.html'}> Xem KPI chung</a></span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="question" />
            <span> Câu hỏi thường gặp</span>
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
              <Icon type="logout" style={{ fontSize: 30, marginLeft: 10, color: '#73d9bc' }} onClick={() => RoutePageManagerInstance.updateRoutePage("1")} />
              <Dropdown
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
                  <p style={{ marginTop: -17, marginRight: 10 }}>{'Tran Minh Hieu'}</p>
                </a>
              </Dropdown>
              <Icon type="info-circle" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} />
              <Icon type="home" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} />
              {/* <Icon type="bell" style={{ fontSize: 30, marginRight: 20, color: '#73d9bc' }} /> */}
              <Dropdown
                style={{ display: "flex", flexDirection: "row-reverse" }}
                overlay={menuNoti}
                placement="bottomLeft"
              >
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    color: "rgba(0, 0, 0, 0.65)"
                  }}
                >
                  <div style={{ width: 20, height: 20, marginRight: 20 }}>
                    <NotificationBadge count={3} style={{ width: 20, height: 20 }} />
                  </div>
                  <Icon type="bell" style={{ fontSize: 30, marginRight: -17, color: '#73d9bc' }} />
                </a>
              </Dropdown>
              <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: -15, marginRight: 10 }}> Dành cho tổ trưởng</p>
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
            {/* <Route path="/findproduct/:id" component={DetailProduct} />
            <Route path="/findproduct" component={FindProductScreen} />
            <Route path="/addproduct" component={AddProductScreen} />
            <Route path="/editproduct" component={EditPtoductScreen} />
            <Route path="/input-inventory" component={InputScreen} />
            <Route path="/out-inventory" component={OutputScreen} />
            <Route path="/find-in-inventory" component={FindinInventory} /> */}
            <Route path="/report" component={ReportingScreen} />
            <Route path="/work/manager/:id" component={WorkerScreen} />
            <Route path="/work/assign/:id" component={AssignScreen} />
            <Route path="/work" component={WorkingScreen} />
            <Route path="/listwork/:id" component={DetailWorkScreen} />
            <Route path="/listwork" component={ListWorkSceen} />
            <Route path="/report-work/:id" component={DetailSelfWorkScreen} />
            <Route path="/report-work" component={ReportWorkScreen} />
            <Route path="/phan-cong/:id" component={PhancongScreen} />
            <Route path="/bao-cao/:id" component={BaocaoScreen} />
            <Route path="/ask-answer" component={AskandAnswersScreen} />
            <Route path="/profile" component={ProfileScreen} />
          </Switch>


        </Content>
        <Footer>
          <BottomComponent />
        </Footer>
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
    switch (this.state.currentpage) {
      case "1":
        supermain = main
        break;
      case "2":
        supermain = page
        break;
      case "3":
        supermain = page2
        break;

      default:
        break;
    }
    console.log(this.state.currentpage)
    return (
      supermain
    )
  }
}


export default withRouter(App);
