import React, { useState,useContext } from 'react';
import {Switch,NavLink,Redirect  } from "react-router-dom";
import { ConstantV } from "./App";
import { togglenavbar } from "./module";
const Dashboard = ()=>{
    const [formdata, setFormData] = useState({
        username: '',
        email:'',
        error:'',
    })
    const {auth,user,setAuth} = useContext(ConstantV)

    const {username,password,email,error} = formdata;



    if(!user){
        return <Redirect to='/'/>
    }


    return (
        <div className='reactDashboard'>

            <div className="responsiveBar">
                <NavLink to=""> <span>Welcome {user}</span> </NavLink>
                <NavLink to="" className='clicknav' onClick={e=>{e.preventDefault();setAuth(null) } }> <span>LOGOUT</span> </NavLink>
            </div>

            <nav>
                <div className="logodiv">
                    <a href="" className='fa fa-bars' onClick={e=>togglenavbar(e)} id="hamburger"></a>
                    <a className="logoElement">ELECTRON DEMO </a>                    
                </div>

                <div className="navelDiv">
                    {/* <a href="">HOME</a>
                    <a href="">ABOUT</a> */}
                    <NavLink to="" onClick={e=>e.preventDefault()}>Welcome {user} </NavLink>
                    <NavLink className='clicknav' to="" onClick={e=>{e.preventDefault();setAuth(null) } }>Logout </NavLink>

                </div>
            </nav>


            <section>
                <div>
                    <h3> <div className="sectionHeader">BACKGROUND IMAGES HD</div> </h3>
                    <div className='formGrid animated'>
                        <div className="grids">
                            <img src="./img/mauricio.jpg" alt=""/>
                            <div>
                                <div><b>IMG1</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>

                        <div className="grids">
                            <img src="./img/color-gradient.jpg" alt=""/>
                            <div>
                                <div><b>IMG2</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>

                        <div className="grids">
                            <img src="./img/photo-of-planner-and-writing-materials-760710.jpg" alt=""/>
                            <div>
                                <div><b>IMG3</b></div>
                                <div className="like-download">
                                    <NavLink to='' className='fa fa-thumbs-up'></NavLink>
                                    <NavLink to='' className='fa fa-download'></NavLink>
                                </div>

                            </div>
                        </div>
                        <div className="grids">
                            <img src="./img/mike-palmowski-wIA52QbD2ew-unsplash.jpg" alt=""/>
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