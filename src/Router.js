import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Home/Header';
import App from './App';
import Footer from './Components/Home/Footer';
import SideBar from './Components/Home/SideBar';
import Forms from './Components/Forms/Forms';
import Login from './Components/User/Login.js';
import Register from './Components/User/Register.js';
import {useSelector } from 'react-redux';

function CustomRouter() {
  const LOGGED_IN_USER = useSelector(state => state.LoginReducer);
  return (
    <div >
         
      <Router>
         <Header />
            <div className='d-flex' style={{bottom:'5vh'}}>
              <div classname='col-3'><SideBar/></div>
              <div className='col-9' style={{padding:'10px'}}>
              <Routes>
                <Route exact path="/" element={LOGGED_IN_USER.username?<></>:<Login/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="Section1"> 
                      <Route path="submenu1"/> <Route path="submenu2"/> <Route path="submenu3"/>
                  </Route>
                  <Route path="Section2"> 
                      <Route path="submenu1"/> <Route path="submenu2"/> <Route path="submenu3"/>
                  </Route>
                  <Route path="Section3"> 
                      <Route path="submenu1"/> <Route path="submenu2"/> <Route path="submenu3"/>
                  </Route>
                  <Route path="Section4"> 
                      <Route path="submenu1"/> <Route path="submenu2"/> <Route path="submenu3"/>
                  </Route>
                  <Route path="Section5"> 
                      <Route path="submenu1"/> <Route path="submenu2"/> <Route path="submenu3"/>
                  </Route>
                  <Route path="Forms" element={<Forms />} />
              </Routes>
              </div>
            </div>
            <Footer/>
      </Router>
          
    </div>
  )
}

export default CustomRouter
