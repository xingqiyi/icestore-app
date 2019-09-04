import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import MainLayout from './layouts/MainLayout/index';

import Login from './pages/Login'
import './app.css'

import stores from './stores'
import {createBrowserHistory} from 'history';


const loggedIn = true;

function App() {
  const customHistory = createBrowserHistory();

  const user = stores.useStore('user')
  const {isLogin} = user;

  // return (
  //     <Router>
  //
  //       <Route exact path="/" render={() => (
  //           loggedIn ? (
  //
  //               <Redirect to="/admin"/>
  //
  //
  //           ) : (
  //               <Login/>
  //           )
  //       )}/>
  //
  //
  //       <Route path="/admin" component={MainLayout}/>
  //
  //       <Route path="/login" component={Login}/>
  //
  //     </Router>
  // )

  return (
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

        <Route path="/login" component={Login}/>

      </Router>
  )


}

export default App
