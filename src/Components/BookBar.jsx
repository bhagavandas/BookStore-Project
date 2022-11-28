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



export function BookBar() {
 
  return (
    <div className='root'>
      <AppBar position="static" sx={{ background:'white'}} className='bar'>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
