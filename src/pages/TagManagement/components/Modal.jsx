import React from 'react'
import stores from '@stores'

import {Modal} from 'antd'


import {Form, Row, Col, Select, Input, DatePicker, Button, Icon} from 'antd';


import './filter.css'

const {Option} = Select;
const {Search} = Input
const {RangePicker} = DatePicker;

const ColProps = {
  // xs: 24,
  // sm: 12,
  span: 24,
  style: {
    margin: 0,

    // margin: '4px 0',
    // marginBottom: 16,
  },
}

let fieldDict = {
  // "id": "",
  // "username": "",
  // "create_time": "时间",
  // "update_time": "时间",

  username: '程序名',
  forensic_time: '标签分类',
  version: '标签名称',
  phone: '描述',

  //
  // forensic_number: '案件号',
  // reporter: '报案人',
  // reporter_id_card: '报案人身份证号',
  // reporter_phone: '报案人手机号',
  // report_desc: '案情描述',
  // swindle_type_str: '被骗类型',

  // 'report_content': [{ 'file_name': '1.mp4', 'file_md5': '1CCDC195B541DF2D9D312F1442ADBC4A' }, {
  //   'file_name': '2.mp4',
  //   'file_md5': '2FFDC195B541DF2D9D312F1442ADBC5B',
  // }],

  report_content: '视频文件',
}

const AdvancedSearchForm = (props) => {

  const storeTags = stores.useStore('tags')
  // const {modalVisible} = stores.getState('tags')

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     console.log('Received values of form: ', values);
  //   });
  // };

  const handleSubmit = () => {
    let fields = getFieldsValue()
    // fields = handleFields(fields)
    // onFilterChange(fields)

    storeTags.filter(fields)
  }

  const handleReset = () => {
    props.form.resetFields();
  };

  const handleAdd = () => {
    storeTags.showModal()
  };


  const handleChange = () => {
    let fields = getFieldsValue()
    // fields = handleFields(fields)
    // onFilterChange(fields)
  }

  const {getFieldDecorator, getFieldsValue} = props.form;

  return (
      <Form className="ant-advanced-search-form" onSubmit={handleSubmit}>

        <Row gutter={24}>
          <Col {...ColProps} >
            <Form.Item label={fieldDict['username']}>
              {getFieldDecorator('username')(
                  <Input allowClear placeholder="请输入"/>
              )}
            </Form.Item>
          </Col>

          <Col {...ColProps} >
            <Form.Item label={fieldDict['forensic_time']}>
              {getFieldDecorator('forensic_time')(
                  <Select showSearch
                          allowClear
                          onChange={handleChange}>
                    <Option value="jack">J</Option>
                    <Option value="lucy">L</Option>
                    <Option value="Yiminghe">y</Option>
                  </Select>
              )}
            </Form.Item>
          </Col>

          <Col {...ColProps} >
            <Form.Item label={fieldDict['version']}>
              {getFieldDecorator('version')(
                  <Select showSearch
                          allowClear
                          onChange={handleChange}>
                    <Option value="jack">J</Option>
                    <Option value="lucy">L</Option>
                    <Option value="Yiminghe">y</Option>
                  </Select>
              )}
            </Form.Item>
          </Col>

          <Col {...ColProps} >
            <Form.Item label={fieldDict['phone']}>
              {getFieldDecorator('phone')(
                  <Input allowClear placeholder="请输入"/>
              )}
            </Form.Item>
          </Col>


        </Row>
      </Form>
  );

}

const WrappedAdvancedSearchForm = Form.create({name: 'advanced_search'})(AdvancedSearchForm);


export default function () {
  const storeTags = stores.useStore('tags')
  const {modalVisible} = stores.getState('tags')


  const handleOk = () => {
    storeTags.hiddenModal()
  }

  const handleCancel = () => {
    storeTags.hiddenModal()
  }

  return (
      <Modal
          title="添加标签"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
      >
        <WrappedAdvancedSearchForm/>

      </Modal>
  )
}
