import React, { useState,useContext } from 'react';
import {Switch,NavLink,Redirect  } from "react-router-dom";
import { ConstantV } from "./App";
import './model.css'
import './animate.css'
const Dashboard = ()=>{
    const [formdata, setFormData] = useState({
        username: '',
        email:'',
        error:'',
    })
    const {auth,isAuthenticated,setAuth} = useContext(ConstantV)

    const {username,password,email,error} = formdata;



    if(!isAuthenticated){
        return <Redirect to='/'/>
    }


    return (
        <div className='reactDashboard'>

            <div className="responsiveBar">
                <a href=""> <span></span> </a>
                <a href=""> <span></span> </a>
                <a href=""> <span>SECTIONS</span> </a>        

            </div>

            <nav>
                <div className="logodiv">
                    <a href="" id="hamburger">Ca</a>
                    <a className="logoElement">
                    ELECTRON DEMO
                    </a>
                    
                </div>

                <div className="navelDiv">
                    {/* <a href="">HOME</a>
                    <a href="">ABOUT</a> */}
                    <NavLink to="" onClick={e=>e.preventDefault()}>Welcome {auth.username} </NavLink>
                    <NavLink className='clicknav' to="" onClick={e=>{e.preventDefault();setAuth(false) } }>Logout </NavLink>

                </div>
            </nav>


            <section>
                <div>
                    <h3> <div className="sectionHeader">MY GALLERY</div> </h3>
                    <div className='formGrid animated'>
                        <div className="grids">
                            <img src="./mauricio.jpg" alt=""/>
                            <div>
                                <div><b>IMG1</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>

                        <div className="grids">
                            <img src="./mauricio.jpg" alt=""/>
                            <div>
                                <div><b>IMG2</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>

                        <div className="grids">
                            <img src="./mauricio.jpg" alt=""/>
                            <div>
                                <div><b>IMG3</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>

                </div>
                </div>
            </section>



        </div>

    
    )


}

// const mapStateToProps = state =>({
//     isAuthenticated:state.auth.isAuthenthicated,
//     detail:state.auth.detail,
//     info: state.auth.info
// });

export default Dashboard;  