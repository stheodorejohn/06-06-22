import React, { useState } from "react";
import "../../antd/main.css";
// import "antd/dist/antd.css";

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

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Menubar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  console.log(items);
  return (
    <div style={{ width: 256 }}>
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      {/* <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="dark"
      
        inlineCollapsed={collapsed}
        items={items}
        style={{ borderRadius: "12px" }}
      /> */}

      <Menu
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1"]}
        style={{ width: 300, borderRadius: "20px" ,  position: 'absolute', top: 0, right: 0}}
        theme="dark"
        mode="inline"
      >
        <SubMenu key="1" title="Home" icon={<ContainerOutlined />}>
          <Menu.Item key="2" className="new_style" icon={<DesktopOutlined />}>
            Welcome Page{" "}
          </Menu.Item>
          <Menu.Item key="3" className="new_style" icon={<PieChartOutlined />}>
            Beneficiary Details
          </Menu.Item>
          <SubMenu
            key="4"
            className="new_style"
            title="Account Details"
            icon={<ContainerOutlined />}
          >
            <Menu.Item key="5" className="new_style" icon={<MailOutlined />}>
              Residential Details{" "}
            </Menu.Item>
            <Menu.Item
              key="6"
              className="new_style"
              icon={<AppstoreOutlined />}
            >
              Personal Details
            </Menu.Item>
            <SubMenu
              key="7"
              className="new_style"
              title="Family Details"
              icon={<ContainerOutlined />}
            >
              <Menu.Item className="new_style" key="8">
                Siblings Details{" "}
              </Menu.Item>
              <Menu.Item className="new_style" key="9">
                Kids Details
              </Menu.Item>
              <Menu.Item className="new_style" key="10">
                Education Details
              </Menu.Item>
              <Menu.Item className="new_style" key="11">
                Insurance Details
              </Menu.Item>
              <SubMenu
                key="12"
                title="Vehicle Details"
                icon={<ContainerOutlined />}
              >
                <Menu.Item className="new_style" key="13">
                  Two Wheeler Details
                </Menu.Item>
                <Menu.Item className="new_style" key="14">
                  Four Wheeler Details
                </Menu.Item>
                <Menu.Item className="new_style" key="15">
                  Insurance Details
                </Menu.Item>
                <Menu.Item className="new_style" key="16">
                  Maintenance Details
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu
          className="new_style"
          key="17"
          title="Official Details"
          icon={<ContainerOutlined />}
        >
          <Menu.Item className="new_style" key="18">
            Experience Certificates
          </Menu.Item>
          <Menu.Item className="new_style" key="19">
            Professional Certificates
          </Menu.Item>
          <Menu.Item className="new_style" key="20">
            Applauses
          </Menu.Item>
          <Menu.Item className="new_style" key="21">
            Artices
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Menubar;
