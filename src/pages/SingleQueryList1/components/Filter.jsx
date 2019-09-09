import React from 'react'
import stores from '@stores'

import {makeStyles} from '@material-ui/core/styles'

import {
  Grid,
  MenuItem,
  TextField,
  Button
} from '@material-ui/core';


const currencies = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
  {
    value: 'BTC',
    label: 'BTC',
  },
  {
    value: 'JPY',
    label: 'JPY',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '80%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // padding: '10px',

    marginTop: theme.spacing(2),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const Filter = () => {

  const list = stores.useStore('list')

  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  function handleSubmit(v) {
    console.log(v);
    list.pageTo(5)

  }

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };


  return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">

          <Grid container spacing={3}>

            <Grid item xs={3}>

              <TextField
                  id="outlined-select-currency-native"
                  select
                  label="标签大类型"
                  className={classes.textField}
                  value={values.currency}
                  onChange={handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText=""
                  margin="normal"
                  variant="outlined"
              >
                {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>

              <TextField
                  id="outlined-select-currency-native"
                  select
                  label="标签小类型"
                  className={classes.textField}
                  value={values.currency}
                  onChange={handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText=""
                  margin="normal"
                  variant="outlined"
              >
                {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={3}>

              <TextField
                  id="outlined-name"
                  label="HASH"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>

              <TextField
                  id="outlined-name"
                  label="程序名"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>


            <Grid item xs={3}>

              <TextField
                  id="outlined-name"
                  label="程序名"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>



          </Grid>

        </form>


      </div>
  )
}
export default Filter;
