import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
 import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';
import "./BookBar.css";
import img1 from './images.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { color } from '@mui/system';



export function BookBar() {
 
  return (
    <div className='root'>
      <AppBar position="static" className='bar'>
        <Toolbar>
        
          <Typography className='title' variant="h6" ><img className='logo'src={img1} alt="Logo" />
              
            Bookstore
          </Typography>
          <div className='searchButton' >
           
              <SearchIcon />
           
            <InputBase className='search'
              placeholder="Search…"
              variant="outlined"
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>
          <div className='cartText'> Cart< AddShoppingCartIcon className='cart'/></div>
          <button className='sign'> <a href="http://localhost:3000/LoginForm" target="_blank" rel="noreferrer">SignIn </a></button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
