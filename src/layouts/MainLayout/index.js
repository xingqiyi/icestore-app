import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Paper, Tabs, Tab, Typography, Box, } from '@material-ui/core';

import Header from "@components/Header";
import { Route, Link, Redirect, BrowserRouter as Router } from "react-router-dom";

import DataFetch from "@pages/DataFetch";
import CustomDataFetch from "@pages/CustomDataFetch";
import ReducerDataFetch from "@pages/ReducerDataFetch";
import TableList from "@pages/TableList";
import Todo from "@pages/Todo";
import FilterList from "@pages/FilterList";
import SingleQueryList from "@pages/SingleQueryList";
import DetailList from "@pages/DetailList";



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}


export default function CenteredTabs({ match }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const CollisionLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to='/admin/singlequery'  {...props} />
  ));

  const CollisionLink2 = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to='/admin/multiquery'  {...props} />
  ));
  const CollisionLink3 = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/admin/todo" {...props} />
  ));

  const CollisionLink4 = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/admin/tablelist" {...props} />
  ));


  return (

    <div className="primary-layout">
      <header>
        <Header></Header>
        <Paper className={classes.root}>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >

            <Tab label="单点查询" component={CollisionLink} />
            <Tab label="组合查询" component={CollisionLink2} />
            <Tab label="标签统计" component={CollisionLink3} />
            <Tab label="标签运维" component={CollisionLink4} />


          </Tabs>

          {/* <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>*/}


        </Paper>


      </header>


      <main>

        {/* 添加 exact 属性，否则 / 会被 /users 或者 /users/add */}

        <Route path='/admin/' exact component={SingleQueryList} />

        <Route exact path="/admin" render={() => (
          <Redirect to="/admin/singlequery" />
        )} />

        <Route path='/admin/singlequery' exact component={SingleQueryList} />

        <Route path="/admin/multiquery" component={CustomDataFetch} />

        <Route path="/admin/detail" component={DetailList} />



        <Route path='/admin/c' component={ReducerDataFetch} />
        <Route path='/admin/list' component={TableList} />
        <Route path='/admin/todo' component={Todo} />
        <Route path='/admin/tablelist' component={FilterList} />

      </main>


    </div>


  );
}
