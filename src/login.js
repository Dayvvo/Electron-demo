import React, { useState,useEffect,useContext, } from 'react';
import { ConstantV } from "./App";
import { Redirect, NavLink} from "react-router-dom";

const Login = ()=>{
    const [formdata, setFormData] = useState({
        username: '',
        email:'',
        password: '',
        error:'',
    })
    const {auth,user,setAuth} = useContext(ConstantV)

    const {username,password,email,error} = formdata;
    const FormOnChange = e =>{
        setFormData({ ...formdata,[e.target.name]:e.target.value });
    }

    const styleComponent = {
        cursor:'pointer'
    }

    const FormOnSubmit = e =>{
        e.preventDefault();
        ternary();
    };

    const SignInLoader=()=>{

    }
    const findisAuth = (value)=> Object.keys(value).findIndex(value=>auth[value].username===username && auth[value].password===password) 

    const ternary  =()=> findisAuth(auth) >= 0 ? (
    setAuth(username)
    ):(setFormData({...formdata,error:'Please enter the correct cridentials'}))

    const formerr = error

    if (user) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <div className='reactContainer'>

                <div className="responsiveBar">
                    <NavLink to=""> <span></span> </NavLink>
                    <NavLink to=""> <span>LOGOUT</span> </NavLink>
                    <NavLink to=""> <span></span> </NavLink>
                </div>

                <nav>
                    <div className="logodiv">
                        <NavLink to='' className="logoElement">
                        ELECTRON DEMO
                        </NavLink>
                        
                    </div>

                    {/* <div className="navelDiv">
                        <a href="">HOME</a>
                        <a href="">ABOUT</a>
                        <a href="">ABOUT</a>

                    </div> */}
                </nav>


                <section className='dash'>
                    <div>
                        <h3> <div className="sectionHeader">SIGN IN</div> </h3>
                        <div>
                            <form action="" className='formContainer' onSubmit={e=>FormOnSubmit(e)} method="post">
                                <div>
                                    <input type="text" name='username' value={username}  onChange={e=>FormOnChange(e)} placeholder='Full name' />
                                </div>
                                <div>
                                    <input type="password" name='password' value={password} onChange={e=>FormOnChange(e)} placeholder='Password' />
                                </div>
                                <div> {error} </div>
                                <input type="submit" value="Submit"/>

                            </form>
                                <div>
                                    <span>Forgot Password?</span> <b>Reset Password</b>
                                </div>
                        </div>
                    </div>
                </section>

            </div>

    
    )


}


export default Login;  