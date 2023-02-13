import React from 'react';
import { Layout } from 'antd';
import {FooterComponent, HeaderComponent} from "../Components";

const LayoutWrap = ({ children }: any) => {
  return (
    <Layout>
      <HeaderComponent defaultSelectedKeys={['1']} />
      <main>{children}</main>
      <FooterComponent />
    </Layout>
  )
}
export default LayoutWrap;