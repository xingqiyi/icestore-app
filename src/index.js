import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'


// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';

// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';

// moment.locale('zh-cn');


// import './global.scss';

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
