import React, {useEffect,useContext,useState} from 'react';
import { ConstantV } from "./App";
import { Redirect, NavLink } from 'react-router-dom';
import { Slidebar,Navbar } from "./containers";
import { useHistory } from "react-router";


const Home = ( {} )=>{


    let {set,update,quizData,isAuth,appname,userHistory,checktoken} = useContext(ConstantV)

    const getHistory = ()=>{
        let token = JSON.parse(localStorage.getItem(`${appname}-token`))

        if (token) {
            fetch('http://localhost:8000/quiz/myhistory/',{
              method:'get',
              headers:{
                  'Authorization': token.token,
                  'Content-Type':'application/json'
              }
  
          })
          .then(response => response.json())
          .then(json => {
            // console.log('json', json)
                set(json,'userHistory')                
          })
        }
        else{
            setFormData({...formdata,isAuth:true})
        }
    }

    useEffect(()=>{
        checktoken()
        getHistory();
    },[])
    
    const [formdata,setFormData] = useState({
        setTimer:null,
        timer: '',
        modalAppear:`modal`,
        testparam:null,
        onhome:true,
        routeValue:null
        // isAuth:null
    })

    const {timer,modalAppear} = formdata;

    const history = useHistory()
    const handleLogout = ()=> {
        localStorage.removeItem(`${appname}-token` )
        set(false,'isAuth')
    }

    const setTest= (e)=>{
        // console.log('target',e.target)
        setFormData({...formdata,modalAppear:`modal appear`,testparam:e.target.id})
    }

    const FormOnChange = e =>{        
        setFormData({ ...formdata,[e.target.name]:e.target.value });
    }

    const returnModal= ()=>{
        if (modalAppear===`modal appear notAuth`){
            return(
                <div>
                    <div>WOULD YOU LIKE TO SIGN IN BEFORE TAKING YOUR TEST? </div>
                    <div className="btnContainer">
                        <button className="greenBtn"onClick={e=>e.preventDefault()}><NavLink to='/login'>YES</NavLink> </button>
                        <button className="blueBtn" onClick={()=>setFormData({...formdata,modalAppear:'modal'})}>NO</button>
                    </div>
                </div>
            )
        }
    }





if (formdata.routeValue) {
    return <Redirect to={formdata.routeValue} />
}

const aboutORhistory = ()=>{
        return(
            <div className='aboutP'>
                <div className="center">ABOUT US</div>
                <div> Take fun quizzes about your favorite topics here. Test your knowledge for your favorite topics, Practice for exams/quizzes, all at your own pace</div>
            </div>
        )

}

return(
    <div className='mainClass'>
        <div className={modalAppear}>
            {returnModal()}
        </div>

        <Slidebar  onhome={formdata.onhome} handleLogout={handleLogout} />
        <Navbar onhome= {formdata.onhome} handleLogout={handleLogout} />

        <main>
            <div className="about">
                {aboutORhistory()}
                <div>

                    <div className="flexGallery">        
                        <div className="galleryCol reverse">
                            <div>
                                <img src="images/photo-of-planner-and-writing-materials-760710.jpg"/>
                            </div>
                            <div>
                                <h2>SCIENCY QUIZ TOPICS</h2>
                                <div className="subtopicLinks">
                                    <div className="subtopic"> <div id={18} >Computers</div> <span></span> </div>
                                    <div className="subtopic"> <div id={19}>Mathematics<span></span></div> </div>
                                    <div className="subtopic"> <div id={18}>Gadgets<span></span></div> </div>
                                </div>
                            </div>
                            {/* <!-- <div className="testbtn">
                                <button>TAKE TEST</button>
                            </div> */}

                        </div>

                        <div className="galleryCol">
                            <div>
                                <img src="images/photo-of-planner-and-writing-materials-760710.jpg"/>
                            </div>
                            <div>
                                <h2>ART & POLITICS</h2>
                                <div className="subtopicLinks">
                                    <div className="subtopic"> <div id={25}>Art</div> <span></span> </div>
                                    <div className="subtopic"> <div id={13}>Theatre<span></span></div> </div>
                                    <div className="subtopic"> <div id={24}>Politics<span></span></div> </div>
                                </div>
                            </div>
                            {/* <!-- <div className="testbtn">
                                <button>TAKE TEST</button>
                            </div> */}

                        </div>


                        <div className="galleryCol reverse">
                            <div>
                                <img src="images/photo-of-planner-and-writing-materials-760710.jpg"/>
                            </div>
                            <div>
                                <h2>ENTERTAINMENT</h2>
                                <div className="subtopicLinks">
                                    <div className="subtopic"> <div id={11} >Movies</div> <span></span> </div>
                                    <div className="subtopic"> <div id={12} >Music</div> <span></span> </div>
                                    <div className="subtopic"> <div id={14}>Television<span></span></div> </div>
                                    <div className="subtopic"> <div id={26}>Celebrities<span></span></div> </div>

                                </div>
                            </div>
                            {/* <!-- <div className="testbtn">
                                <button>TAKE TEST</button>
                            </div> */}

                        </div>

                        <div className="galleryCol">
                            <div>
                                <img src="images/photo-of-planner-and-writing-materials-760710.jpg"/>
                            </div>
                            <div>
                                <h2>HISTORY AND GENERAL KNOWLEDGE</h2>
                                <div className="subtopicLinks">
                                    <div className="subtopic"> <div id={23} >History</div> <span></span> </div>
                                    <div className="subtopic"> <div id={20}>Mythology<span></span></div> </div>
                                    <div className="subtopic"> <div id={9}>General Knowledge<span></span></div> </div>
                                </div>
                            </div>
                            {/* <!-- <div className="testbtn">
                                <button>TAKE TEST</button>
                            </div> */}

                        </div>

                    </div>




                </div>
            </div>
        

        </main>
        <footer>
            <div>
                <div>
                    <a href="" className='fa fa-twitter'></a>
                    <a href="" className= 'fa fa-instagram'></a>
                    <a href="" className='fa fa-linkedin'></a>
                </div>
            </div>
            <div className="footnote">
                <div><b>Copyright 2020</b></div>
                <div className="legal" >
                    <a href="">About</a>
                    <a href="">Security</a>
                    <a href="">Legal</a>
                </div>
            </div>
        </footer>

    </div>                  
)
}

export default Home;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     