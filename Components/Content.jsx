import React from 'react';
import {Breadcrumb, Layout, theme} from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const { Content } = Layout

const ContentComponent = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0', textAlign: 'right' }}>
        <Breadcrumb.Item>
          <Link href="/">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '16px 0', background: colorBgContainer }}>
        <Content style={{ padding: '0 16px', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Content>
  )
}
export default ContentComponent;