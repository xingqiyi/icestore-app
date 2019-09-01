

import React from 'react'
import { Table, Pagination } from '@alifd/next';

import stores from '../../../stores'

const render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>;
};


const List = () => {

    const list = stores.useStore('list')
    const { dataSource, loading } = list

    React.useEffect(() => {
        list.init();
    }, []);

    function onChange(currentPage) {
        list.pageTo(currentPage)
        // this.setState({
        //     loading: true
        // });
        // setTimeout(() => {
        //     this.setState({
        //         dataSource: dataSource(currentPage * 5),
        //         loading: false
        //     });
        // }, 200);
    }



    return (
        <div>
            <Table
                loading={loading}
                dataSource={dataSource}>
                <Table.Column title="Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
                <Table.Column cell={render} />
            </Table>


            <Pagination onChange={onChange} className="page-demo" />
        </div>
    )

}

export default List

