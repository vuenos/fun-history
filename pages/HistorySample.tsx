import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Table} from "antd";
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import {DataType} from "csstype";
// @ts-ignore
import qs from "qs";

interface DataType {
  Date: string,
  Event: string
}

interface TableParams {
  pagination?: TablePaginationConfig;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Date',
    width: '20%'
  },
  {
    title: 'Event',
    dataIndex: 'Event',
    key: 'Event',
  }
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const HistorySample = () => {
  const [events, setEvents] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  async function getEvents () {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/kojosun?${qs.stringify(getRandomuserParams(tableParams))}`);
      const data = response.data;
      setEvents(data);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.totalCount,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEvents();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (
    pagination: TablePaginationConfig,
  ) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setEvents([]);
    }
  };

  // const dataSource = [...events];

  return (
    <div>
      <h1>HistorySample</h1>

      <Table
        dataSource={events}
        columns={columns}
        loading={loading}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      />

    </div>
  )
}
export default HistorySample;