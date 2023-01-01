import { Layout } from 'antd';
import { HeaderComponent, ContentComponent, FooterComponent } from '../Components';

const Home = () => {

  return (
    <Layout>
      <HeaderComponent defaultSelectedKeys={['1']} />
      <ContentComponent />
      <FooterComponent />
    </Layout>
  );
};

export default Home;