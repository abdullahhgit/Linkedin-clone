import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOption({title, Icon, avatar}) {
  return (
    <div className='HeaderOption'>
      {
        Icon && <Icon className="HeaderOption__icon" />
      }
      
      {
        avatar && <Avatar src={avatar} className="HeaderOption__avatar" />
      }

      <h3 className='title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
