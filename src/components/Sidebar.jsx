import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='Sidebar'>
      <div className="sidebar__top">
        <img 
        src="https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80%20870w" 
        alt="" />
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

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Bootstrap")}
        {recentItem("Sass")}
        {recentItem("JavaScript")}
        {recentItem("Ionic")}
        {recentItem("Vue.js")}
      </div>
    </div>
  )
}

export default Sidebar
