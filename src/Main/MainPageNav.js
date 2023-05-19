import React from 'react'
import {NavLink} from 'react-router-dom'
import {Home,People,Notifications,OndemandVideo,Menu,Add,Search,OfflineBolt, Storefront} from '@mui/icons-material'
import './MainPageNav.css'
import MainPost from './MainPost'
const MainPageNav = () => {
  return (
    <div>
        <div className='home__nav'>
            <div>
               <h2 className='home__title'>facebook</h2>
            </div>
            <div className='home__icons'>
                <div>
                   <Add className='home__icon'/>
                </div>
                <div>
                    <Search className='home__icon'/>
                </div>
                <div>
                    <OfflineBolt className='home__icon'/>
                </div>

            </div>
        </div>
        <div className='home__nav__icons'>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/'>  <Home className='home__nav__icon'/></NavLink>
              
             </div>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/friends' ><People className='home__nav__icon'/></NavLink>             
             </div>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/videos'> <OndemandVideo className='home__nav__icon'/></NavLink>
               
             </div>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/store'> <Storefront className='home__nav__icon'/></NavLink>
               
             </div>
             <div>
               <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/notification'><Notifications className='home__nav__icon'/></NavLink>
                
             </div>
             <div>
               <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/menu'><Menu className='home__nav__icon'/></NavLink>
                
             </div>
             
        </div>
        <div className='Border'>

      </div>
      <MainPost/>
    </div>
  )
}

export default MainPageNav