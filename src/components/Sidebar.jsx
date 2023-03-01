import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Abdullah Khan</h2>
        <h4>HTML, CSS, JS, Reactjs, MERN Stack Developer</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed your profile</p>
            <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar
