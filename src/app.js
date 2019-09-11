import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import MainLayout from './layouts/MainLayout/index';

import Login from '@pages/Login'
import './app.css'

import stores from '@stores'
import {createBrowserHistory} from 'history';

import 'antd/dist/antd.css';

import {ConfigProvider} from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


function App() {
  const customHistory = createBrowserHistory();

  const user = stores.useStore('user')
  //   const {isLogin} = user;
  let {isLogin} = stores.getState('user')

  const user_id = localStorage.getItem('u_id')

  isLogin = isLogin || user_id


  const appDiv = (
      <Router history={customHistory}>

        <Route exact path="/" render={() => (
            <Redirect to="/admin"/>
        )}/>

        <Route path="/admin" render={() => (
            !isLogin ? (
                <Redirect to="/login"/>
            ) : (
                <MainLayout/>
            )
        )}/>

        {/*<Route path="/admin" component={MainLayout}/>*/}

        {/* <Route path="/login" component={Login} /> */}

        <Route path="/login" render={() => (
            isLogin ? (
                <Redirect to="/admin"/>
            ) : (
                <Login/>
            )
        )}/>


      </Router>
  );

  return (
      <ConfigProvider locale={zh_CN}>{appDiv}</ConfigProvider>
  );

}


export default App
