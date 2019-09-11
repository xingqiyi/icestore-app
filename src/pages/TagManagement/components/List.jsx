import React from 'react'
import {Table, Button, Popconfirm} from 'antd';

import stores from '@stores'
// import {Link} from "react-router-dom";


const List = () => {

  const tags = stores.useStore('tags')


  const {dataSource: data, loading} = stores.getState('tags')


  React.useEffect(() => {
    tags.init();
  }, []);


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
    {
      title: '操作',
      dataIndex: 'action',
      render: (text, record) => (
          <div>

            <Popconfirm
                title="确定删除吗?"
                onConfirm={deleteHandler}
                // onCancel={cancel}
                okText="确定"
                cancelText="取消">
              <Button type='danger' size='small'>删除</Button>
            </Popconfirm>,


          </div>
      ),

    }
  ];
  const deleteHandler = (e) => {

  }


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
