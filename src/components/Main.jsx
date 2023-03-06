import React from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import "./Main.css"

function Main() {
  return (
    <div className='main'>
        <Header />
        <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
        </div>
    </div>
  )
}

export default Main
