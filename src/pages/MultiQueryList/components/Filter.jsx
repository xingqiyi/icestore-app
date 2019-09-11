import React from 'react';
import './filter.css'

import {Form, Row, Col, Select, Input, DatePicker, Button, Icon} from 'antd';

import stores from '@stores'


const {Option} = Select;
const {Search} = Input
const {RangePicker} = DatePicker;


let id = 0;

const ColProps = {
  span: 8,

  // xs: 24,
  // sm: 12,
  // style: {
  //   margin: 0,
  //   // margin: '4px 0',
  //   // marginBottom: 16,
  // },

}

// const formItemLayout = {
//   labelCol: {
//     xs: {span: 24},
//     sm: {span: 4},
//   },
//   wrapperCol: {
//     xs: {span: 24},
//     sm: {span: 20},
//   },
// };

const formItemLayoutWithOutLabel = {

  wrapperCol: {
    xs: {span: 8, offset: 0},
    sm: {span: 8, offset: 0},
  },


};

let fieldDict = {
  // "id": "",
  // "username": "",
  // "create_time": "时间",
  // "update_time": "时间",

  forensic_time: '标签大类',
  username: 'HASH',
  imei: '时间',
  version: '标签小类',
  phone: '程序名',

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


const DynamicFieldSet = (props) => {

  const list = stores.useStore('list')


  // const handleSubmit = () => {
  //   let fields = getFieldsValue()
  //   // fields = handleFields(fields)
  //   // onFilterChange(fields)
  //
  //   list.filter(fields)
  // }

  const handleReset = () => {
    props.form.resetFields();
  };


  const handleChange = () => {
    let fields = getFieldsValue()
    // fields = handleFields(fields)
    // onFilterChange(fields)
  }


  const remove = k => {
    const {form} = props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger

    // if (keys.length === 1) {
    //   return;
    // }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  const add = () => {
    const {form} = props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const {keys, names} = values;
        let fields = getFieldsValue()
        list.filter(fields)

      }
    });
  };


  const {getFieldDecorator, getFieldValue} = props.form;
  const {getFieldsValue} = props.form;

  getFieldDecorator('keys', {initialValue: []});
  const keys = getFieldValue('keys');

  // const formItems = keys.map((k, index) => (
  //     <Form.Item
  //         {...formItemLayout}
  //         label='Passengers'
  //         required={false}
  //         key={k}
  //     >
  //       {getFieldDecorator(`names[${k}]`, {
  //         validateTrigger: ['onChange', 'onBlur'],
  //         rules: [
  //           {
  //             required: true,
  //             whitespace: true,
  //             message: "Please input passenger's name or delete field.",
  //           },
  //         ],
  //       })(<Input placeholder="passenger name" style={{width: '60%', marginRight: 8}}/>)}
  //       {keys.length > 1 ? (
  //           <Icon
  //               className="dynamic-delete-button"
  //               type="minus-circle-o"
  //               onClick={() => remove(k)}
  //           />
  //       ) : null}
  //     </Form.Item>
  // ));

  const formCols = keys.map((k, idx) => (
      <Row gutter={24}>
        <Col {...ColProps} >
          <Form.Item label={fieldDict['forensic_time']}>
            {getFieldDecorator('forensic_time')(
                <Select showSearch
                        onChange={handleChange}>
                  <Option value="jack">J</Option>
                  <Option value="lucy">L</Option>
                  <Option value="Yiminghe">y</Option>
                </Select>
            )}
            {/* {keys.length > 1 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => remove(k)}
                />
            ) : null}*/}
          </Form.Item>
        </Col>

        <Col {...ColProps} >
          <Form.Item label={fieldDict['version']}>
            {getFieldDecorator('version')(
                <Select showSearch
                        onChange={handleChange}>
                  <Option value="jack">J</Option>
                  <Option value="lucy">L</Option>
                  <Option value="Yiminghe">y</Option>
                </Select>
            )}

          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item label=''>
            {keys.length > 0 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => remove(k)}
                />
            ) : null}
          </Form.Item>
        </Col>

      </Row>

  ))


  return (
      <Form
          className="ant-advanced-search-form"

          labelCol={{span: 8}}
          onSubmit={handleSubmit}>


        <Row gutter={24}>


          <Col {...ColProps} >
            <Form.Item label={fieldDict['forensic_time']}>
              {getFieldDecorator('forensic_time')(
                  <Select showSearch
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
                          onChange={handleChange}>
                    <Option value="jack">J</Option>
                    <Option value="lucy">L</Option>
                    <Option value="Yiminghe">y</Option>
                  </Select>
              )}
            </Form.Item>
          </Col>


          <Col {...ColProps} >
            <Form.Item label={fieldDict['imei']}>
              {getFieldDecorator('imei')(
                  <RangePicker

                      format='YYYY-MM-DD'
                      format='YYYY-MM-DD'
                  />
              )}
            </Form.Item>
          </Col>

        </Row>


        {formCols}

        <Row gutter={24}>

          <Col {...ColProps}  >
            <Form.Item label=' ' colon={false}>

              <Button type="dashed" onClick={add} style={{width: '100%'}}>
                <Icon type="plus"/> 添加过滤条件
              </Button>
            </Form.Item>
          </Col>


          <Col offset={8} span={8}>

            <Form.Item label=' ' colon={false}>
              <Button
                  type="primary"

                  style={{marginRight: 16}}
                  onClick={handleSubmit}>
                查询
              </Button>
              <Button onClick={handleReset}>重置</Button>


            </Form.Item>

          </Col>


        </Row>


      </Form>
  );

}

const WrappedDynamicFieldSet = Form.create({name: 'dynamic_form_item'})(DynamicFieldSet);

export default WrappedDynamicFieldSet
