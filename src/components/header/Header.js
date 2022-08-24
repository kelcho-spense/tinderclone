import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import "./header.css";
const Header = () => {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>       
        <img className='header_logo' 
            src='https://icon-library.com/images/tinder-logo-png-tinder-logo-tinder-1252.jpg' 
            alt='logo' 
        />  
        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>      
    </div>
  )
}

export default Header