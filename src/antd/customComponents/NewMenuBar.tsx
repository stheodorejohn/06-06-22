import React, { useState } from "react";
import "../../antd/main.css";
// import "antd/dist/antd.css";
import { useAuth } from "../../route/Auth";

import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { MenuItem } from "@mui/material";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const NewMenuBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const auth = useAuth();

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1"]}
        style={{
          width: 300,
          borderRadius: "20px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
        theme="dark"
        mode="inline"
      >
        <SubMenu key="1" title="Home" icon={<ContainerOutlined />}>
        <Menu.Item key="3" className="new_style" icon={<PieChartOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="2" className="new_style" icon={<DesktopOutlined />}>
            <Link   to="/register">
              Register
            </Link>
          </Menu.Item>
         
          <SubMenu
            key="4"
            
            className={auth.user ? "new_style" : "link-none"}  
            title="Secured Content "
            icon={<ContainerOutlined />}
          >
             
           
              <Menu.Item   className={auth.user ? "new_style" : "link-none"}  key="8">
              
              <Link to="/todo">
            Todo
          </Link>

              </Menu.Item>
              <Menu.Item  className={auth.user ? "new_style" : "link-none"}  key="9">
              <Link  to="/error">
            Error
          </Link>
              </Menu.Item>
              <Menu.Item  className={auth.user ? "new_style" : "link-none"}  key="10">
              <Link  to="/todoant">
            Todo[Ant]
          </Link>
              </Menu.Item>
               
            </SubMenu>
          </SubMenu>
      
        
      </Menu>
    </div>
  );
};

export default NewMenuBar;
