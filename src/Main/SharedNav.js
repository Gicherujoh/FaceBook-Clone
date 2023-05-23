import React from 'react'
import {Home,People,Notifications,OndemandVideo,Menu,Storefront} from '@mui/icons-material'
import {NavLink} from 'react-router-dom'
const SharedNav = () => {
  return (
    <div>
        <div className='home__nav__icons'>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/'>  <Home className='home__nav__icon'/></NavLink>
              
             </div>
             <div>
                <NavLink style={({isActive})=>{
                   return {color:isActive ? 'blue' : 'grey'}
                }} to='/friendrequest' ><People className='home__nav__icon'/></NavLink>             
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
    </div>
  )
}

export default SharedNav