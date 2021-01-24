import React, {useContext, useEffect} from 'react';
import {Link, NavLink } from 'react-router-dom'
import { ConstantV } from "../App";

const Slidebar = ({ontest, handle, onhome})=>{
    const {isAuth,handleLogout} = useContext(ConstantV)

    const navlinkHandler = (e,param)=>{
        if (ontest) { 
            e.preventDefault();
            handle(param);        
        }
    }

    
    const Auth = isAuth ? 
        (<li> <NavLink to="/signup" onClick={e=>{navlinkHandler(e,'/logout')}}>LOGOUT( <b>{isAuth.username.toUpperCase()}</b> ) </NavLink></li>):
        (<li> <NavLink to="/login" onClick={e=>{navlinkHandler(e,'/login')}} >LOGIN/SIGNUP</NavLink></li>)

    return(
        <div className="slidebar">
            <ul>
                <li><NavLink to="/" onClick={e=>navlinkHandler(e,'/')}  className="log_in">HOME</NavLink> </li>
                <li><NavLink to="/" onClick={e=>navlinkHandler(e,'/board')}  className="log_in">LEADERBOARD</NavLink></li>
                {Auth}
            </ul>
        </div>
    )
}

export default Slidebar