import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signUserOut = async() => {
    await signOut(auth);
    navigate("/login");  
  };

  return (
    <div className='header'>

      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="App-logo" />

        <div className="header__search">
            {/* Material UI Search icon placed here */}
            <SearchIcon />
            <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        {
          user && (
            <>
              <HeaderOption avatar={user ? user.photoURL : "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"}
              title={user ? user.displayName : "Login"}/>
              <button className='HeaderOption' onClick={signUserOut}>
                <LockIcon />
                <p>logout</p>
              </button>   
            </>
          )
        }
        <Link className='HeaderOption' to="/login">
          <LoginIcon />
          <p>Login</p>
        </Link>
      </div>
      
    </div>
  )
}

export default Header
