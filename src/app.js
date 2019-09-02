import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import { Router, Route, Link } from 'react-router'
import logo from './logo.svg'
import './App.css'

import DataFetch from './pages/DataFetch'
import CustomDataFetch from './pages/CustomDataFetch'
import ReducerDataFetch from './pages/ReducerDataFetch'
import TableList from './pages/TableList'

import Todo from './pages/Todo'

import FilterList from './pages/FilterList'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      fetch data by React Hook
      <div style={{
        display: 'flex',
        width: '500px',
        justifyContent: 'space-around',

        margin: '20px'
      }}>

        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/a'>Fetch by Hook</Link>
        </span>
        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/b'>自定义Hook</Link>
        </span>
        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/c'>useReduce</Link>
        </span>

        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/list'>TableList</Link>
        </span>

        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/todo'>icestore</Link>
        </span>

        <span style={{ boxShadow: '#58a 0px 0px 6px 3px', }}>
          <Link to='/tablelist'>list</Link>
        </span>


      </div>

    </header>
    <main>
      {/* 添加 exact 属性，否则 / 会被 /users 或者 /users/add */}
      <Route path="/" exact component={DataFetch} />
      <Route path="/a" exact component={DataFetch} />
      <Route path="/b" component={CustomDataFetch} />
      <Route path='/c' component={ReducerDataFetch} />

      <Route path='/list' component={TableList} />
      <Route path='/todo' component={Todo} />
      <Route path='/tablelist' component={FilterList} />

    </main>
  </div>
)

function App() {
  // return (
  //   <div className="App">
  //     <ReducerDataFetch></ReducerDataFetch>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  )
}

export default App
