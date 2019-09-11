import React from 'react'
import {Form, Row, Col, Select, Input, DatePicker, Button, Icon} from 'antd';

import stores from '@stores'

import './filter.css'

const {Option} = Select;
const {Search} = Input
const {RangePicker} = DatePicker;

const ColProps = {
  xs: 24,
  sm: 12,
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

  forensic_time: '标签分类',
  username: '标签名称',
  imei: '添加时间',

  // version: '标签小类',
  // phone: '程序名',

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
          <Col {...ColProps} xl={8} md={8} xs={24}>
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

          <Col {...ColProps} xl={8} md={8} xs={24}>
            <Form.Item label={fieldDict['username']}>
              {getFieldDecorator('username')(
                  <Search allowClear placeholder="请输入" onSearch={handleSubmit}/>
              )}
            </Form.Item>
          </Col>

          <Col {...ColProps} xl={8} md={8} xs={24}>
            <Form.Item label={fieldDict['imei']}>
              {getFieldDecorator('imei')(
                  <RangePicker

                      format='YYYY-MM-DD'
                      format='YYYY-MM-DD'
                  />
              )}
            </Form.Item>
          </Col>

          {/* <Col {...ColProps} xl={8} md={8} xs={24}>
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

          <Col {...ColProps} xl={8} md={8} xs={24}>
            <Form.Item label={fieldDict['phone']}>
              {getFieldDecorator('phone')(
                  <Search allowClear placeholder="请输入" onSearch={handleSubmit}/>
              )}
            </Form.Item>
          </Col>
    */}

          <Col span={8}>

            <Form.Item colon={false} label=' '>
              <Button type="primary"
                      style={{marginRight: 16}}
                      onClick={handleSubmit}>
                查询
              </Button>
              <Button onClick={handleReset}>重置</Button>

            </Form.Item>

          </Col>

          <Col span={8} offset={8} style={{padding: 0}}>
            <Form.Item label='' style={{textAlign: 'right', marginRight: '15px'}}>
              <Button style={{textAlign: 'right', marginRight: 0}} onClick={handleAdd}>添加</Button>
            </Form.Item>
          </Col>


        </Row>
      </Form>
  );

}

const WrappedAdvancedSearchForm = Form.create({name: 'advanced_search'})(AdvancedSearchForm);


export default WrappedAdvancedSearchForm
