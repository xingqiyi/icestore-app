import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withRouter, Redirect } from 'react-router';
import stores from './../../stores'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://127.0.0.1/">
        Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const user = stores.useStore('user')
  const { isLogin, loading } = stores.getState('user');

  const loginHandler = () => {

    // const isL = user.login(islog => {
    //   islog && props.history.push('/admin/singlequery')
    // });

    user.login();
    // user.login2();

    // props.history.push('/admin/singlequery')


    // props.history.push('/admin/a')


    // return false;

    //
    // if (isL) {
    //   this.props.history.push('/admin/a')
    // }

    // this.props.history.push('/admin/a')

    // login().then(
    //     isL => {
    //       console.log(isL)
    //       this.props.history.push('/admin/a')
    //     }
    // )


  }

  // if (isLogin) {
  //   return (<Redirect to="/admin/a"/>);
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          人像识别系统
          </Typography>


        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}

          disabled={loading}

          onClick={loginHandler}
        >
          {loading ? "登陆中..." : '登 录'}
        </Button>


        {/*<form className={classes.form} noValidate onSubmit={loginHandler}>*/}
        {/*<TextField*/}
        {/*variant="outlined"*/}
        {/*margin="normal"*/}
        {/*required*/}
        {/*fullWidth*/}
        {/*id="email"*/}
        {/*label="用户名"*/}
        {/*name="email"*/}
        {/*autoComplete="email"*/}
        {/*autoFocus*/}
        {/*/>*/}
        {/*<TextField*/}
        {/*variant="outlined"*/}
        {/*margin="normal"*/}
        {/*required*/}
        {/*fullWidth*/}
        {/*name="password"*/}
        {/*label="密码"*/}
        {/*type="password"*/}
        {/*id="password"*/}
        {/*autoComplete="current-password"*/}
        {/*/>*/}

        {/*<FormControlLabel*/}
        {/*control={<Checkbox value="remember" color="primary"/>}*/}
        {/*label="记住我"*/}
        {/*/>*/}

        {/*<Button*/}
        {/*type="submit"*/}
        {/*fullWidth*/}
        {/*variant="contained"*/}
        {/*color="primary"*/}
        {/*className={classes.submit}*/}


        {/*>*/}
        {/*登 录*/}
        {/*</Button>*/}

        {/*/!*    <Grid container>*/}
        {/*<Grid item xs>*/}
        {/*<Link href="#" variant="body2">*/}
        {/*Forgot password?*/}
        {/*</Link>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*<Link href="#" variant="body2">*/}
        {/*{"Don't have an account? Sign Up"}*/}
        {/*</Link>*/}
        {/*</Grid>*/}
        {/*</Grid>*!/*/}


        {/*</form>*/}


      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// export default withRouter(Login)
export default Login
