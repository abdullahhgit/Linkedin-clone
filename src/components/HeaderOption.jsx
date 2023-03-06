import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"
import { Link } from 'react-router-dom';

function HeaderOption({title, Icon, avatar}) {
  return (
    <Link to="/" className='HeaderOption'>
      {
        Icon && <Icon className="HeaderOption__icon" />
      }
      
      {
        avatar && <Avatar src={avatar} className="HeaderOption__avatar" />
      }

      <h3 className='title'>{title}</h3>
    </Link>
  )
}

export default HeaderOption
