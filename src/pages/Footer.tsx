import React, { useState } from "react";
import "antd/dist/antd.css"; //DEFAULT CSS

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link, Routes } from "react-router-dom";
import { useAuth } from "../route/Auth";
import RegisterApp from "./RegisterApp";
import Login from "./Login";
import { Route } from "react-router-dom";
import { RequireAuth } from "../route/RequireAuth";
import Todo from "../Redux/Todo/Todo";
import { ErrorSource } from "../errorBoundary/ErrorSource";
import ErrorBoundaries from "../errorBoundary/ErrorBoundaries";
import Welcome from "./Welcome";
import TodoAnt from "../Redux/Todo/TodoAnt";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const FooterApp: React.FC = () => {
  const auth = useAuth();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <h2 style={{ color: "white" }}>Welcome to Our Application</h2>{" "}
        </Header>
        <Content style={{ margin: "0 16px" }}>
            <div style={{display:"inline-block"}}>
            {/* <h1 style={{color:'black',borderRadius:'20px',boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', padding:'20px',border:'2px solid black',marginTop:'25vh'}}> Kindly use the menu bar available at right side <br /> Have a Great Day ahead </h1> */}

            </div>
       

          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterApp />} />

            <Route
            path="welcome"
            element={
              <RequireAuth>
                <Welcome />
              </RequireAuth>
            }
          />

          <Route
            path="error"
            element={
              <RequireAuth>
                <ErrorBoundaries>
                  <ErrorSource />
                </ErrorBoundaries>
              </RequireAuth>
            }
          />

          <Route
            path="todo"
            element={
              <RequireAuth>
                <Todo />
              </RequireAuth>
            }
          />

          <Route
            path="todoant"
            element={
              <RequireAuth>
                <TodoAnt />
              </RequireAuth>
            }
          />
          </Routes>
        </Content>

        <Footer style={{ textAlign: "center", backgroundColor:'rgb(14, 15, 46)',color:'white' }}>
          Ant Design ©2022 Created by Theo
        </Footer>
      </Layout>

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
     

        <Menu
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["1"]}
         
          theme="dark"
          mode="inline"
        >
          <SubMenu key="1" title="Home" icon={<ContainerOutlined />}>
            <Menu.Item
              key="3"
            
              icon={<PieChartOutlined />}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="2"   icon={<DesktopOutlined />}>
              <Link to="/register">Register</Link>
            </Menu.Item>

            <SubMenu
              key="4"
              className={auth.user ? "new_style" : "link-none"}
              title="Secured Content "
              icon={<ContainerOutlined />}
            >
              <Menu.Item
                className={auth.user ? "new_style" : "link-none"}
                key="8"
              >
                <Link to="/todo">Todo</Link>
              </Menu.Item>
              <Menu.Item
                className={auth.user ? "new_style" : "link-none"}
                key="9"
              >
                <Link to="/error">Error</Link>
              </Menu.Item>
              <Menu.Item
                className={auth.user ? "new_style" : "link-none"}
                key="10"
              >
                <Link to="/todoant">Todo[Ant]</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default FooterApp;
// #components-layout-demo-side .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.3);
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }
