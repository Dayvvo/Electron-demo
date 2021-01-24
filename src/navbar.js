import React, {useContext, useEffect} from 'react';
import {Link, NavLink } from 'react-router-dom'
import Slidebar from "./slidebar";
import { toggleEvent } from "./modules";
import { ConstantV } from "../App";

const Navbar = ({ontest,handle,onhome,handleLogout})=>{

    const {isAuth} = useContext(ConstantV)


    const navlinkHandler = (e,param)=>{
        if (ontest) { 
            e.preventDefault();            
            handle(param);
        }
        else if (onhome && param==='/logout') {
            console.log('onhome triggered')
            e.preventDefault();
            handleLogout()
        }
    }
    
    const Auth =
        <NavLink to="/" className="get_start" ><span>LOGOUT(<b>{isAuth.username.toUpperCase()}</b>)</span></NavLink>

    

    return(
        <header>
            <nav>
                <div className="logo">
                    <div><span>Tree</span><span>vi</span><span>a</span> </div>
                </div>
                <span id="scroll" onClick={(e)=>toggleEvent(e)}>
                    <i className='fa fa-bars'></i>
                </span>
                <ul>
                    <NavLink to="/" onClick={e=>navlinkHandler(e,'/')}  className="log_in">HOME</NavLink>
                    <NavLink to="/" className="get_start" ><span>LOGOUT(<b>{isAuth.username.toUpperCase()}</b>)</span></NavLink>

                </ul>
            </nav>

        </header>        
    )
}

export default Navbar