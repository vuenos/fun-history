import React, {useEffect, useState} from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import {Row, Col, Layout} from 'antd';
import { SelectAge } from '../Components';
import { HistoryKorea, HistoryChina } from '../Components'

const { Content } = Layout;

const Main = () => {
  const [pageTitle, setPageTitle] = useState<string>("");
  const router = useRouter();
  const updateTitle = () => {
    switch (router.pathname) {
      case '/' :
        setPageTitle('Home')
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    updateTitle();
  }, []);

  return (
    <Layout style={{ padding: '16px 0', background: '#f5f5f5' }}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Content style={{ padding: '0 16px', minHeight: 280 }}>
        <SelectAge />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <HistoryKorea />
          </Col>
          <Col span={12}>
            <HistoryChina />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Main;