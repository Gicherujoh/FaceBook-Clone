import React from 'react'
import MainPageNav from './MainPageNav';
import {Outlet} from 'react-router-dom'
import './MainPage.css';
const MainPage = () => {
  return (
    <> 
      <MainPageNav/>
     <div>
       <Outlet/>
     </div>
    
    </>
  )
}

export default MainPage