import React from 'react'

import {Tabs, Progress} from 'antd'

import styles from './Detail.module.less'

const TabPane = Tabs.TabPane


let fieldDict = {
  'product_name': 'fff',
  'uptime': 'fff',
}

let field2Dict = {

  'cpu_model': 'abc',
  'logical_cpu_amount': 'abc',
  'physical_cpu_amount': 'abc',
  'cpu_use': 'abc',


  'memory_total': 'abc',
  'memory_used': 'abc',
  'memory_available': 'abc',
  'memory_percent': 'abc',

}

let field3Dict = {
  'disk_total': 'ddd',
  'disk_used': 'ddd',
  'disk_free': 'ddd',
  'disk_percent': 'ddd',
}


const data_json = {
  "code": 1,
  "data": {
    "memory_used": "2.16G",
    "logical_cpu_amount": 8,
    "cpu_model": " Intel Core Processor (Broadwell)",
    "disk_total": "492.09G",
    "cpu_use": "0.9%",
    "uptime": "43\u5929",
    "disk_percent": "60.0%",
    "memory_available": "28.04G",
    "memory_total": "31.26G",
    "memory_percent": "10.3%",
    "physical_cpu_amount": 1,
    "disk_used": "283.43G",
    "product_name": " OpenStack Nova",
    "disk_free": "188.6G"
  }
}

export default (props) => {

  // const {data, pagination} = props

  const data = data_json.data


  const machineBox = []
  for (let key in fieldDict) {
    if (!Object.keys(data).includes(key)) {
      continue
    }
    if ({}.hasOwnProperty.call(data, key)) {
      machineBox.push(
          <div key={key} className={styles.item}>
            <div>{fieldDict[key]}</div>
            <div>
              {String(data[key])}</div>
          </div>,
      )
    }
  }

  const content = []
  for (let key in field2Dict) {
    if (!Object.keys(data).includes(key)) {
      continue
    }
    if ({}.hasOwnProperty.call(data, key)) {

      if (key === 'cpu_use' || key === 'memory_percent') {
        content.push(
            <div key={key} className={styles.item}>
              <div>{field2Dict[key]}</div>
             {/* <div>
                <Progress status="active" style={{paddingRight: '30px'}} percent={parseFloat(data[key])}/>
              </div>*/}
            </div>,
        )
      } else {
        content.push(
            <div key={key} className={styles.item}>
              <div>{field2Dict[key]}</div>
              <div>
                {String(data[key])}
              </div>
            </div>,
        )
      }


    }
  }


  const content_disk = []
  for (let key in field3Dict) {
    if (!Object.keys(data).includes(key)) {
      continue
    }
    if ({}.hasOwnProperty.call(data, key)) {

      if (key === 'disk_percent') {
        content_disk.push(
            <div key={key} className={styles.item}>
              <div>{field3Dict[key]}</div>
              {/*<div>
                <Progress status="active" style={{paddingRight: '30px'}} percent={parseFloat(data[key])}/>
              </div>*/}
            </div>,
        )
      } else {
        content_disk.push(
            <div key={key} className={styles.item}>
              <div>{field3Dict[key]}</div>
              <div>
                {String(data[key])}
              </div>
            </div>,
        )
      }


    }
  }


  return (
      <div>

        <div className={styles.title}>
          <span>设备参数</span>
        </div>
        <div className={styles.content1}>
          {machineBox}
        </div>

        <div className={styles.title}>
          <span>CPU/内存参数</span>
        </div>
        <div className={styles.content2}>
          {content}
        </div>

        <div className={styles.title}>
          <span>硬盘参数</span>
        </div>
        <div className={styles.content2}>
          {content_disk}
        </div>

      </div>

  )
}

