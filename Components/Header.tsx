import React from "react";
import { MenuProps } from "antd";
import { Layout, Menu, Dropdown, Space, Typography } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderComponent = (props: any) => {

  return (
    <Header className="header" style={{ paddingInline: '24px' }}>
      <Row align="middle">
        <Col span={2}>
          <Title level={1} style={{ margin: '0 0', color: 'white', fontSize: '14px'}}>
            Fun
          </Title>
        </Col>
        <Col span={18}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={props.defaultSelectedKeys}
            items={items1}
          />
        </Col>
        <Col span={4}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Menu
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
