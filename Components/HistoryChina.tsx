import React from 'react';
import {Card, Timeline} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";

const HistoryChina = () => {
  const items = [
    {
      children: 'Create a services site 2015-09-01',
    },
    {
      children: 'Solve initial network problems 2015-09-01',
      color: 'green',
    },
    {
      dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
      children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
      color: 'red',
      children: 'Network problems being solved 2015-09-01',
    },
    {
      children: 'Create a services site 2015-09-01',
    },
    {
      dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
      children: 'Technical testing 2015-09-01',
    },
  ];

  return (
    <Card
      title="China"
    >
      <Timeline
        mode="alternate"
        items={items}
      />
    </Card>
  )
}
export default HistoryChina;