import React, {useState} from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';
import { ClickAwayListener } from '@material-ui/core';
import Axios from 'axios';

// 
const currencies = [
    
    {
      value: 'Sweets',
      label: 'Sweets',
    },
    {
      value: 'Namkeen',
      label: 'Namkeen',
    },
    {
      value: 'Snacks',
      label: 'Snacks',
    },
  ];
 
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
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
    height:60,
    width:60,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [count,setcount]=useState("");
  const [count1,setcount1]=useState("");
  const [count2,setcount2]=useState("");
  const [count3,setcount3]=useState("");
  
  function change(e)
  {
    setcount(e.target.value);
  }
  function change1(u)
  {
    setcount1(u.target.value);
  }
  function change2(v)
  {
    setcount2(v.target.value);
  }
  function change3(w)
  {
    setcount3(w.target.value);
  }

  function click()
  {
    return Axios.post("http://localhost:3001/signup",{Product_category:count,Product_name:count1,Price:count2,Image:count3})
  }
  const [values, setValues] = React.useState({
    
    
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          <Typography><b>श्रीजी</b></Typography>
        </Avatar>
        
        <form className={classes.form} noValidate action="http://localhost:3000/aditi" method="post" >
          <Grid container spacing={2}>
            <Grid item xs={12} >
            <TextField
        id="outlined-select-currency"
        select
        label="Product Category"
        name="Product_category"
        onChange ={(u)=>change1(u)}  //db
        required 
        fullWidth
        variant="outlined"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
       >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Product Name"
                onChange={(v)=>change2(v)}
                 // id="Product Name"
                name="Product_name"
                // autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Price"
                name="Price"
                onChange={(w)=>change3(w)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ImageUrl"
                label=""
                type="file"
                id='sa'
                
                // id="password"
                // autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>click()}
          >
            Update Item List
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}