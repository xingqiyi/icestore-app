import React from 'react'
import {Table} from 'antd';

import stores from '@stores'
import {Link} from "react-router-dom";

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'time',
    dataIndex: 'time',
  },
];


const List = () => {

  const list = stores.useStore('list')
  const {dataSource: data, loading} = list


  React.useEffect(() => {
    list.init();
  }, []);


  return (
      <div>
        <Table columns={columns}
               dataSource={data}
               rowKey="id"
               size="middle"/>
      </div>
  )

}

export default List;
