import { Card } from 'antd';
import Table from 'components/table';
import Header from 'components/header';
import Footer from 'components/footer';

import './index.scss';
const Survivor = () => {
  return (
    <>
      <Header />
      <div className="survivor">
        <div className="survivor__list">
          <Card className="survivor__list__card">
            <Table />
          </Card>
        </div>

        <div className="survivor__analytics">
          <Card className="survivor__analytics__rank survivor__analytics__card">
            content
          </Card>
          <Card className="survivor__analytics__picker survivor__analytics__card">
            content
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Survivor;
