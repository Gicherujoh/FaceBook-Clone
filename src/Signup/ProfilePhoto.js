import React from 'react'
import './ProfilePhoto.css'
import {Button} from '@mui/material'
import {ArrowBack,Person} from '@mui/icons-material'
const ProfilePhoto = () => {
  return (
    <div>
        <div className='profile__nav'>
           <ArrowBack/>
           <div className='profile__nav__title'>
            <h3>Profile Picture Page</h3>
            </div>
            
        </div>
        <div className='Border'>

        </div>
        <div className='profile__main'>
            <div >
            <img src='' className='profile__pic'/>
            </div>  
             <Button variant='contained' className='profile__button'>Upload</Button>
        
        </div>
    </div>
  )
}

export default ProfilePhoto