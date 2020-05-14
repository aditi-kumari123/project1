import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../../myimg/logo.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
 
  icon1:{
    display:'flex',
    marginLeft: theme.spacing(10),
    
  },  
  root: {
    flexGrow: 1,
    marginTop:5
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    height:30,
    // alignItems:'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.45),
      },
    marginLeft: 40,
    width: '20%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(118),
      
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
    alignItems:'center',
  },
  inputInput: {
    
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  bgcolor:{
   backgroundColor:'transparent',
   boxShadow:'none',
  },
  menuButton:{
    color:'black',
  },
  searchIcon:{
    position:'absolute',
    height:'100%',
    display:'flex',
    alignItems:'center',
    color:'black',
    backgroundColor:'#c9d4c9',
    marginLeft:'80',
  },
  makeStyles:{
    color:'black',
    alignItems:'center',
  }
  
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <AppBar className={classes.bgcolor} position="static">
        <Toolbar>
          <img src={logo} width="80vwvh" height="80vwvh"/>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
            
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
           
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}